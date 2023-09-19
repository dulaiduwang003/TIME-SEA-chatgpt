package com.cn.bdth.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * descThisFile
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */

@Data
@TableName(value = "sys_log")
@Accessors(chain = true)
public class SysLog {
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * '日志内容'
     */
    private String logContent;
    /**
     * '操作用户账号'
     */
    private Long userId;
    /**
     * '操作用户名称'
     */
    private String userName;

    private String ip;
    /**
     * '请求java方法'
     */
    private String method;

    /**
     * '请求参数
     */
    private String requestParam;

    /**
     * '耗时'
     */
    private Long costTime;
}
