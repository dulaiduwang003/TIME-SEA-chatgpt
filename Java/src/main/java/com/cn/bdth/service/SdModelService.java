package com.cn.bdth.service;

import com.cn.bdth.entity.SdModelEntity;

import java.util.List;

/**
 * descThisFile
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */
public interface SdModelService {

    List<SdModelEntity> getSdModel(Integer type);
}
