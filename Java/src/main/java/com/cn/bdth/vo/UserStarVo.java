package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * The type User star vo.
 *
 * @author 20740
 */
@Data
@Accessors(chain = true)
public class UserStarVo implements Serializable {

    private Long starId;

    private String issue;

    private String answer;

    private LocalDateTime createdTime;
}
