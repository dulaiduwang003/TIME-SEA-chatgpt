package com.cn.bdth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.entity.SdModelEntity;
import com.cn.bdth.mapper.SdModelEntityMapper;
import com.cn.bdth.service.SdModelService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * descThisFile
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class SdModelServiceImpl implements SdModelService {
    private final SdModelEntityMapper sdModelEntityMapper;

    @Override
    public List<SdModelEntity> getSdModel(Integer type) {
        if (null == type) {
            type = 0;
        }
        return sdModelEntityMapper.selectList(new QueryWrapper<SdModelEntity>().lambda()
                .eq(SdModelEntity::getType, type)
                .eq(SdModelEntity::getDelFlag, 0)
        .orderByAsc(SdModelEntity::getSort));
    }
}
