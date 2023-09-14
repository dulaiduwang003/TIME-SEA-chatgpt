package com.cn.bdth.service.impl;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.AlipayConfig;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradePrecreateModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePrecreateRequest;
import com.alipay.api.response.AlipayTradePrecreateResponse;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.constants.OrderConstant;
import com.cn.bdth.constants.lock.LockPrefix;
import com.cn.bdth.dto.ShelvesProductDto;
import com.cn.bdth.entity.Orders;
import com.cn.bdth.entity.Product;
import com.cn.bdth.entity.User;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.OrdersException;
import com.cn.bdth.mapper.OrdersMapper;
import com.cn.bdth.mapper.ProductMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.PayService;
import com.cn.bdth.structure.AlipayCacheStructure;
import com.cn.bdth.task.UnpaidOrderQueue;
import com.cn.bdth.utils.*;
import com.cn.bdth.vo.AlipayPayCodeVo;
import com.cn.bdth.vo.OrderPageVo;
import com.cn.bdth.vo.ProductVo;
import com.google.zxing.WriterException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 支付服务impl
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class PayServiceImpl implements PayService {

    private final ProductMapper productMapper;

    private final RedisUtils redisUtils;

    private final RedisLockHelper lockHelper;

    private final IdGeneratorUtils idGeneratorUtils;

    private final OrdersMapper ordersMapper;

    private final UserMapper userMapper;

    @Value("${ali-pay.appId}")
    private String appId;

    @Value("${ali-pay.alipayPublicKey}")
    private String alipayPublicKey;

    @Value("${ali-pay.privateKey}")
    private String privateKey;

    @Value("${ali-pay.domain}")
    private String domain;

    private final UnpaidOrderQueue unpaidOrderQueue;


    /**
     * 得到产品列表
     * 产品列表
     *
     * @return {@link List}<{@link ProductVo}>
     */
    @Override
    public List<ProductVo> getProductList() {
        return productMapper.selectList(
                new QueryWrapper<Product>()
                        .lambda()
                        .select(Product::getProductId, Product::getProductPrice, Product::getProductName, Product::getFrequency)
        ).stream().map(c -> new ProductVo().setProductId(c.getProductId()).setProductPrice(c.getProductPrice()).setFrequency(c.getFrequency()).setProductName(c.getProductName())).collect(Collectors.toList());
    }

    /**
     * 得到当前用户订单页面
     *
     * @param pageNum 页面num
     * @return {@link OrderPageVo}
     */
    @Override
    public OrderPageVo getCurrentUserOrderPage(final int pageNum) {
        final Long userId = UserUtils.getCurrentLoginId();
        return getOrdersPage(userId, null, null, pageNum);
    }

    /**
     * 得到用户订单页面
     *
     * @param pageNum 页面num
     * @param status  状态
     * @return {@link OrderPageVo}
     */
    @Override
    public OrderPageVo getUserOrderPage(int pageNum, String prompt, String status) {
        return getOrdersPage(null, prompt, status, pageNum);
    }

    /**
     * 得到订单页面
     *
     * @param userId  用户id
     * @param state   状态
     * @param pageNum 页面num
     * @return {@link OrderPageVo}
     */
    private OrderPageVo getOrdersPage(final Long userId, final String prompt, final String state, final int pageNum) {
        final OrderPageVo orderPageVo = new OrderPageVo();
        final IPage<OrderPageVo.Orders> convert = ordersMapper.selectPage(new Page<>(pageNum, 15), new QueryWrapper<Orders>()
                .lambda()
                .eq(userId != null, Orders::getUserId, userId)
                .eq(StringUtils.notEmpty(state), Orders::getState, state)
                .eq(StringUtils.notEmpty(prompt), Orders::getOrdersId, prompt)
                .select(
                        Orders::getOrdersId,
                        Orders::getPayTime,
                        Orders::getState,
                        Orders::getProductPrice,
                        Orders::getProductName,
                        Orders::getFrequency,
                        Orders::getReasonFailure
                ).orderByDesc(Orders::getCreatedTime)
        ).convert(o -> new OrderPageVo.Orders()
                .setOrdersId(o.getOrdersId())
                .setReasonFailure(o.getReasonFailure())
                .setState(o.getState())
                .setFrequency(o.getFrequency())
                .setPayTime(o.getPayTime())
                .setProductName(o.getProductName())
                .setProductPrice(o.getProductPrice()));
        orderPageVo.setOrders(convert);
        // 查询总金额
        double totalAmount;
        try {
            totalAmount = (Double) ordersMapper.selectObjs(
                    new QueryWrapper<Orders>()
                            .eq(userId != null, "user_id", userId)
                            .eq("state", 1)
                            .select("sum(product_price)")
            ).stream().findFirst().orElseThrow();
        } catch (Exception e) {
            totalAmount = 0;
        }
        // 将字符串转换为Double类型
        return orderPageVo.setTotalAmount(totalAmount);
    }

    /**
     * 删除产品通过id
     *
     * @param id id
     */
    @Override
    public void deleteProductById(final Long id) {
        productMapper.deleteById(id);
    }


    /**
     * 货架上产品
     *
     * @param dto dto
     */
    @Override
    public void shelvesProduct(final ShelvesProductDto dto) {
        productMapper.insert(BeanUtils.copyClassProperTies(dto, Product.class));
    }

    @Override
    public IPage<ProductVo> getProductPageVo(int pageNum, String prompt) {
        return productMapper.selectPage(new Page<>(pageNum, 15), new QueryWrapper<Product>()
                        .lambda()
                        .like(StringUtils.notEmpty(prompt), Product::getProductName, prompt)
                        .select(Product::getProductId, Product::getProductName, Product::getProductPrice, Product::getFrequency, Product::getCreatedTime)
                )
                .convert(c -> new ProductVo().setProductId(c.getProductId()).setProductName(c.getProductName()).setProductPrice(c.getProductPrice()).setFrequency(c.getFrequency()).setCreatedTime(c.getCreatedTime()));
    }

    /**
     * 生成二维码支付
     *
     * @param productId 产品id
     * @return {@link AlipayPayCodeVo}
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public AlipayPayCodeVo generatePayQrCode(final Long productId) {
        final String timestamp = String.valueOf(System.currentTimeMillis());
        //当前登录用户ID
        final Long currentLoginId = UserUtils.getCurrentLoginId();
        //锁前缀
        final String lockPrefix = LockPrefix.ORDERS_PAY + currentLoginId;
        //上锁
        final boolean lock = lockHelper.lock(lockPrefix, timestamp);

        try {
            if (!lock) {
                throw new OrdersException(ExceptionMessages.PLACE_AN_ORDER_REPEATEDLY_ERR, 500);
            }
            final String key = OrderConstant.ORDER_PAY + currentLoginId + productId;
            if (redisUtils.doesItExist(key)) {
                final AlipayCacheStructure cache = (AlipayCacheStructure) redisUtils.getValue(key);
                //生成BASE64图片给前端
                return new AlipayPayCodeVo()
                        .setOrdersId(cache.getOrdersId())
                        .setQrCode(QRCodeGenerator.generateQRCode(cache.getUrl()))
                        .setProductPrice(cache.getProductPrice())
                        .setProductName(cache.getProductName())
                        .setCreatedTime(cache.getCreatedTime());
            }
            //商品是否存在
            final Product product = productMapper.selectOne(new QueryWrapper<Product>()
                    .lambda().eq(Product::getProductId, productId)
                    .select(Product::getProductId, Product::getProductPrice, Product::getFrequency, Product::getProductName)
            );
            if (product == null) {
                throw new OrdersException(ExceptionMessages.PRODUCT_NULL_ERR, 500);
            }
            //生成单号
            final String orderNo = idGeneratorUtils.getOrderNo();

            final Orders orders = new Orders()
                    .setOrdersId(orderNo)
                    // 0 待支付 1已支付 2 已回收
                    .setState(0)
                    .setProductPrice(product.getProductPrice())
                    .setProductName(product.getProductName())
                    .setProductId(productId)
                    .setFrequency(product.getFrequency())
                    .setUserId(currentLoginId);
            ordersMapper.insert(orders);
            //装载配置
            final AlipayConfig alipayConfig = new AlipayConfig();
            alipayConfig.setServerUrl("https://openapi.alipay.com/gateway.do");
            alipayConfig.setFormat("json");
            alipayConfig.setCharset("UTF8");
            alipayConfig.setSignType("RSA2");
            alipayConfig.setAppId(appId);
            alipayConfig.setAlipayPublicKey(alipayPublicKey);
            alipayConfig.setPrivateKey(privateKey);
            //构建支付宝订单
            AlipayClient alipayClient = new DefaultAlipayClient(alipayConfig);
            //预构建请求
            AlipayTradePrecreateRequest request = new AlipayTradePrecreateRequest();
            AlipayTradePrecreateModel model = new AlipayTradePrecreateModel();
            model.setOutTradeNo(orderNo);
            //支付金额
            model.setTotalAmount(String.valueOf(product.getProductPrice()));
            //商品名称
            model.setSubject(product.getProductName());
            //5分钟过期
            model.setTimeoutExpress("5m");
            request.setBizModel(model);
            //支付宝回调地址
            request.setNotifyUrl(domain + "/public/callback/order");
            AlipayTradePrecreateResponse response = alipayClient.execute(request);
//            log.info("支付宝生成信息:{}", response.getBody());
            //是否构建成功？ 构建成功则 创建二维码
            if (response.isSuccess()) {
                final AlipayCacheStructure cache = new AlipayCacheStructure()
                        .setCreatedTime(orders.getCreatedTime())
                        .setProductName(product.getProductName())
                        .setUrl(response.getQrCode())
                        .setProductPrice(product.getProductPrice())
                        .setOrdersId(orderNo);
                //缓存订单数据
                redisUtils.setValueTimeout(key, cache, 300);
                //添加至 待支付 队列中
                unpaidOrderQueue.addOrder(orderNo);
                //生成BASE64图片给前端
                //返回base64编码支付二维码图片
                return new AlipayPayCodeVo()
                        .setOrdersId(cache.getOrdersId())
                        .setQrCode(QRCodeGenerator.generateQRCode(cache.getUrl()))
                        .setProductPrice(cache.getProductPrice())
                        .setProductName(cache.getProductName())
                        .setCreatedTime(cache.getCreatedTime());
            } else {
                log.error("创建订单失败 订单号:{}, 错误信息：{}", orderNo, response.getBody());
                throw new AlipayApiException();
            }
        } catch (IOException | AlipayApiException | WriterException e) {
            throw new OrdersException(ExceptionMessages.BUILD_FAILED_PAY_ERR, 500);
        } finally {
            lockHelper.unlock(lockPrefix, timestamp);
        }

    }

    /**
     * 支付宝回调
     *
     * @param request 请求
     * @return {@link String}
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public String alipayPullback(final HttpServletRequest request) {
        Map<String, String> params = new HashMap<>();
        Map<String, String[]> requestParams = request.getParameterMap();
        for (String name : requestParams.keySet()) {
            String[] values = requestParams.get(name);
            StringBuilder valueStr = new StringBuilder();
            for (int i = 0; i < values.length; i++) {
                valueStr.append((i == values.length - 1) ? values[i] : values[i] + ",");
            }
            params.put(name, valueStr.toString());
        }
        // 调用SDK验证签名
        boolean signVerified;
        try {
            signVerified = AlipaySignature.rsaCheckV1(params, alipayPublicKey, "UTF8", "RSA2");
        } catch (AlipayApiException e) {

            throw new RuntimeException(e);
        }
        // 验证成功
        if (signVerified) {

            String tradeStatus = request.getParameter("trade_status");
            log.info("回调结果:{}", tradeStatus);
            // 支付成功
            if ("TRADE_SUCCESS".equals(tradeStatus)) {
                final String outTradeNo = request.getParameter("out_trade_no");
                final Orders orders = ordersMapper.selectOne(new QueryWrapper<Orders>()
                        .lambda()
                        .eq(Orders::getOrdersId, outTradeNo)
                        .select(Orders::getFrequency, Orders::getUserId, Orders::getProductId)
                );
                if (orders != null) {
                    ordersMapper
                            .updateById(new Orders()
                                    .setOrdersId(outTradeNo)
                                    //已支付
                                    .setState(1)
                                    .setPayTime(LocalDateTime.now())
                            );
                    userMapper.update(null, new UpdateWrapper<User>()
                            .lambda()
                            .eq(User::getUserId, orders.getUserId())
                            .setSql("frequency = frequency +" + orders.getFrequency()));

                    redisUtils.delKey(OrderConstant.ORDER_PAY + orders.getUserId().toString() + orders.getProductId());
                }

                return "success";
            }
        } else {
            log.error("支付失败");
            return "fail";
        }
        return "fail";
    }


    /**
     * 付款状态
     *
     * @param orderNo 订单没有
     * @return {@link String}
     */
    @Override
    public String paymentStatus(final String orderNo) {
        final Orders orders = ordersMapper.selectOne(new QueryWrapper<Orders>()
                .lambda()
                .eq(Orders::getOrdersId, orderNo)
                .select(Orders::getState)
        );
        if (orders != null) {
            if (orders.getState() == 0) {
                return OrderConstant.BE_PAID;
            } else if (orders.getState() == 1) {
                return OrderConstant.PAID;
            } else {
                return OrderConstant.IS_CLOSED;
            }
        } else {
            return OrderConstant.IS_CLOSED;
        }

    }


}
