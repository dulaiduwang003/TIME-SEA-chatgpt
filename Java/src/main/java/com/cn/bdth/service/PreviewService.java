package com.cn.bdth.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.cn.bdth.dto.DrawingGptTextDto;
import com.cn.bdth.dto.DrawingSdDto;
import com.cn.bdth.dto.DrawingSdTaskDto;
import com.cn.bdth.vo.*;
import com.cn.bdth.vo.admin.DrawingVo;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface PreviewService {


    PreviewUploadImageVo uploadImage(final MultipartFile file);


}
