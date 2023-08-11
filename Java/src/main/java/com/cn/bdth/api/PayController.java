package com.cn.bdth.api;


import com.cn.bdth.exceptions.OrdersException;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.PayService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * 交易性接口
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/pay")
@RequiredArgsConstructor
public class PayController {


    private final PayService payService;


    /**
     * 生成支付宝支付二维码
     *
     * @param productId the product id
     * @return the result
     */
    @PostMapping(value = "/alipay/pay/{productId}", name = "支付宝支付", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result alipayPayQrCode(@PathVariable final Long productId) {
        try {
            return Result.data(payService.generatePayQrCode(productId));
        } catch (OrdersException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }

    /**
     * 获取商品列表
     *
     * @return the product list
     */
    @GetMapping(value = "/product/list", name = "获取商品列", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getProductList() {
        return Result.data(payService.getProductList());
    }

    /**
     * 获取我的打赏订单记录
     *
     * @return the product list
     */
    @GetMapping(value = "/orders/page", name = "获取我的打赏订单记录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result tippingOrdersPages(@RequestParam(defaultValue = "1") final int pageNum) {
        return Result.data(payService.getCurrentUserOrderPage(pageNum));
    }


    /**
     * 支付宝支付状态查询
     *
     * @param orderId the order id
     * @return the result
     */
    @PostMapping(value = "/alipay/status/{orderId}", name = "支付宝支付状态", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result alipayIsSucceed(@PathVariable final String orderId) {
        return Result.data(payService.paymentStatus(orderId));
    }


}
