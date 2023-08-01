package com.cn.bdth.structure;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class AnnouncementStructure implements Serializable {

    private String context;

    private String logotypeId;

    private LocalDateTime createdTime;
}
