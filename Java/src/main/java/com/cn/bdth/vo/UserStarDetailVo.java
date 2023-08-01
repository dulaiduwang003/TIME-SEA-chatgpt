package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * The type User star vo.
 *
 * @author 20740
 */
@Data
@Accessors(chain = true)
public class UserStarDetailVo implements Serializable {


    private String issue;

    private String answer;

}
