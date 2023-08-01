package com.cn.bdth.api;

import com.cn.bdth.msg.Result;
import com.cn.bdth.service.ServerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * 公开
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/public")
@RequiredArgsConstructor
public class PublicController {


    private final ServerService serverService;


    /**
     * 获取公告
     *
     * @return the announcement
     */
    @GetMapping(value = "/get/announcement", name = "获取公告", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getAnnouncement() {

        return Result.data(serverService.getAnnouncement());

    }


}
