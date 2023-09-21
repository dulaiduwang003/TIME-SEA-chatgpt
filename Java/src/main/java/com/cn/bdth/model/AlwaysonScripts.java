package com.cn.bdth.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * sd-controlNet
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlwaysonScripts {
    private ControlNet controlnet;
}
