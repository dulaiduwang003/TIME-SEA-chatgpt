package com.cn.bdth.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cn.bdth.entity.Drawing;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Mapper
public interface DrawingMapper extends BaseMapper<Drawing> {

    @Select("select drawing_id as drawingId,original_url as originalUrl, generate_url as generateUrl from drawing where generate_url is null")
    List<Drawing> getCleanDrawing();

    @Delete("delete from drawing where drawing_id = #{id,jdbcType=BIGINT}")
    void cleanDrawingById(@Param("id") Long id);
}
