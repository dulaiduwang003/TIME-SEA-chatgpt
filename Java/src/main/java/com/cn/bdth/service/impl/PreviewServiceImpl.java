package com.cn.bdth.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.common.StableDiffusionCommon;
import com.cn.bdth.common.WxSubscribe;
import com.cn.bdth.common.WxSubscribeTemplate;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.dto.DrawingGptTextDto;
import com.cn.bdth.dto.DrawingSdDto;
import com.cn.bdth.dto.DrawingSdTaskDto;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.PreviewImages;
import com.cn.bdth.entity.SdModelEntity;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.exceptions.DrawingException;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.PreviewImageMapper;
import com.cn.bdth.mapper.SdModelEntityMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.model.GptImageModel;
import com.cn.bdth.model.SdDrawingModel;
import com.cn.bdth.service.DrawingService;
import com.cn.bdth.service.PreviewService;
import com.cn.bdth.structure.DrawingSdQueueStructure;
import com.cn.bdth.utils.*;
import com.cn.bdth.vo.*;
import com.cn.bdth.vo.admin.DrawingVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class PreviewServiceImpl implements PreviewService {

    private final AliUploadUtils aliUploadUtils;

    private final ImageUtils imageUtils;

    private final PreviewImageMapper previewImageMapper;

    @Override
    public PreviewUploadImageVo uploadImage(final MultipartFile file) {
        //获取登录人ID
        final Long currentLoginId = UserUtils.getCurrentLoginId();
        final PreviewImages previewImages = new PreviewImages();
        previewImages.setUserId(currentLoginId);
        String imageUrl = "";
        if (file!= null) {
            imageUrl = aliUploadUtils.uploadFile(file, FileEnum.PREVIEW.getDec(), null, true);
            previewImages.setUrl(imageUrl);
        }
        previewImageMapper.insert(previewImages);
        return new PreviewUploadImageVo().setImageUrl(imageUrl);
    }

}
