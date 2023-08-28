package com.cn.bdth.vo.admin;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class UserDataVo {

    private Long userId;

    private String userName;

    private LocalDateTime createdTime;

    private Long frequency;

    private String lastOperationTime;

    private String email;

}
