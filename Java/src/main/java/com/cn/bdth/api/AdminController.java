package com.cn.bdth.api;

import com.cn.bdth.dto.*;
import com.cn.bdth.dto.admin.AnnouncementDto;
import com.cn.bdth.dto.admin.UserPutDto;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.DrawingService;
import com.cn.bdth.service.PayService;
import com.cn.bdth.service.ServerService;
import com.cn.bdth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * 管理员权限接口
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ServerService serverService;

    private final UserService userService;

    private final DrawingService drawingService;

    private final PayService payService;


    /**
     * 分页获取用户信息
     *
     * @param pageNum the page num
     * @param prompt  the prompt
     * @return the bot configuration
     */
    @GetMapping(value = "/sd/page/model", name = "分页获取SD模型", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getSdModelPages(@RequestParam(defaultValue = "1") final int pageNum, final String prompt) {
        return Result.data(
                drawingService.getDrawingModelPage(pageNum, prompt)
        );
    }

    /**
     * 添加SD模型
     *
     * @param dto the dto
     * @return the bot configuration
     */
    @PostMapping(value = "/sd/put/data", name = "添加SD模型", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result putSdModel(@RequestBody @Validated final DrawingSdDto dto) {
        drawingService.addSdModel(dto);
        return Result.ok();
    }

    /**
     * 添加SD模型
     *
     * @return the bot configuration
     */
    @PostMapping(value = "/sd/delete/{id}", name = "删除指定模型", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result deleteDrawingById(@PathVariable Long id) {
        drawingService.deletedSdModel(id);
        return Result.ok();
    }


    /**
     * 生成兑换码
     *
     * @param dto the dto
     * @return the bot configuration
     */
    @PostMapping(value = "/exchange/build", name = "生成对话码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result buildExchangeCode(@RequestBody @Validated final PutExchangeDto dto) {
        serverService.buildRedemptionCode(dto);
        return Result.ok();
    }


    /**
     * 更新服务器配置参数
     *
     * @param dto the dto
     * @return the bot configuration
     */
    @PostMapping(value = "/server/put/config", name = "用于保存或更新服务器参数", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result heavyLoadServerConfig(@RequestBody @Validated final ServerConfigDto dto) {
        serverService.heavyLoadDisposition(dto);
        return Result.ok();
    }

    /**
     * 获取服务器配置
     *
     * @return the bot configuration
     */
    @GetMapping(value = "/server/get/config", name = "获取服务器配置", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getServerConfig() {
        return Result.data(serverService.getDisposition());
    }


    /**
     * 更新终端
     *
     * @param dto the dto
     * @return the bot configuration
     */
    @PostMapping(value = "/server/put/terminal", name = "用于保存或更新终端参数", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result putTerminalConfig(@RequestBody @Validated final TerminalConfigDto dto) {
        serverService.putTerminal(dto);
        return Result.ok();
    }

    /**
     * 获取终端
     *
     * @return the bot configuration
     */
    @GetMapping(value = "/server/get/terminal", name = "获取服务器配置", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getTerminalConfig() {
        return Result.data(serverService.getTerminal());
    }


    /**
     * 分页获取用户信息
     *
     * @param pageNum the page num
     * @param prompt  the prompt
     * @return the bot configuration
     */
    @GetMapping(value = "/user/get/page", name = "分页获取用户信息", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getUserPages(@RequestParam(defaultValue = "1") final int pageNum, final String prompt) {

        return Result.data(
                userService.getUserPageVo(pageNum, prompt)
        );
    }

    /**
     * 获取平台总人数
     */
    @GetMapping(value = "/user/get/count", name = "获取平台总人数", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getPlatformCount() {
        return Result.data(
                userService.getTotalUsers()
        );
    }

    /**
     * 分页获取订单信息
     *
     * @param pageNum the page num
     * @param status  the prompt
     * @return the bot configuration
     */
    @GetMapping(value = "/orders/page", name = "分页获取订单信息", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getOrdersPages(@RequestParam(defaultValue = "1") final int pageNum, @RequestParam final String prompt, @RequestParam final String status) {
        return Result.data(
                payService.getUserOrderPage(pageNum, prompt, status)
        );
    }

    /**
     * 新增产品
     *
     * @return the bot configuration
     */
    @PostMapping(value = "/product/put/data", name = "新增产品", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result productsShelf(@RequestBody @Validated ShelvesProductDto dto) {
        payService.shelvesProduct(dto);
        return Result.ok();
    }

    /**
     * 分页获取用户信息
     *
     * @param pageNum the page num
     * @param prompt  the prompt
     * @return the bot configuration
     */
    @GetMapping(value = "/product/get/page", name = "分页获取产品", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getProductPages(@RequestParam(defaultValue = "1") final int pageNum, final String prompt) {
        return Result.data(
                payService.getProductPageVo(pageNum, prompt)
        );
    }

    /**
     * 删除产品
     *
     * @return the bot configuration
     */
    @PostMapping(value = "/product/delete/{id}", name = "删除产品", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result productsDelete(@PathVariable final long id) {
        payService.deleteProductById(id);
        return Result.ok();
    }


    /**
     * 修改用户信息
     *
     * @param dto the dto
     * @return the bot configuration
     */
    @PostMapping(value = "/user/put/data", name = "修改用户数据信息", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result updateUserById(@RequestBody @Validated final UserPutDto dto) {
        userService.updateById(dto);
        return Result.ok();
    }

    /**
     * 分页获取兑换码
     *
     * @param pageNum the page num
     * @param prompt  the prompt
     * @return the result
     */
    @GetMapping(value = "/exchange/get/page", name = "兑换码列表", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result redemptionCodePage(@RequestParam(defaultValue = "1") int pageNum, @RequestParam final String prompt) {

        return Result.data(serverService.getRedemptionCodePage(pageNum, prompt));
    }

    /**
     * 根据ID删除兑换码
     *
     * @param id the id
     * @return the result
     */
    @PostMapping(value = "/exchange/delete/{id}", name = "删除兑换码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result deleteExchangeById(@PathVariable final Long id) {
        serverService.deleteRedemptionCodeBasedOnTheId(id);
        return Result.ok();
    }

    /**
     * 获取绘图列表分页
     *
     * @param pageNum the pageNum
     * @return the result
     */
    @GetMapping(value = "/drawing/page", name = "获取绘图分页", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getDrawingPage(@RequestParam(defaultValue = "1") final int pageNum) {
        return Result.data(drawingService.getDrawingPage(pageNum));
    }

    /**
     * 设置公共状态
     *
     * @return the result
     */
    @PostMapping(value = "/drawing/status/{id}", name = "设置绘图状态", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result putDrawingStatus(@PathVariable final Long id) {
        drawingService.putPublicDrawingOps(id);
        return Result.ok();
    }

    /**
     * 更新公告
     *
     * @return the result
     */
    @PostMapping(value = "/put/announcement", name = "更新公告", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result putAnnouncement(@RequestBody @Validated final AnnouncementDto dto) {
        serverService.putAnnouncement(dto);
        return Result.ok();
    }
}
