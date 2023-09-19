package com.cn.bdth.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

/**
 * 图像工具类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Component
@Slf4j
public class ImageUtils {


    @Value("${ali-oss.domain}")
    private String domain;

    public String convertImageToBase64(final String imagePath) {
        try {
            String imageUrl = domain + imagePath;
            Mono<byte[]> imageMono = WebClient.builder()
                    .codecs(item -> item.defaultCodecs().maxInMemorySize(10 * 1024 * 1024 * 1024)).build().get()
                    .uri(imageUrl)
                    .accept(MediaType.IMAGE_JPEG, MediaType.IMAGE_PNG)
                    .retrieve()
                    .bodyToMono(byte[].class);
            byte[] imageBytes = imageMono.block();
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
            return "data:image/jpg;base64," + base64Image;
        } catch (Exception e) {
            log.error("图片转BASE64失败 错误信息:{} 位置:{}", e.getMessage(), e.getClass());
            throw new RuntimeException(e);
        }
    }

    //根据文字生成图片
    public String getImageBase64ByText(final String text, final int height, final int width) {
        int spacing = 0; // 文字行间距

        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        Graphics graphics = image.getGraphics();

        // 设置背景颜色为白色
        graphics.setColor(Color.BLACK);
        graphics.fillRect(0, 0, width, height);

        // 设置字体和颜色（使用支持中文的字体）
        Font font = new Font("思源黑体 CN", Font.BOLD, width/text.length());
        graphics.setFont(font);
        graphics.setColor(Color.WHITE);

        // 计算文字的位置，并绘制文字
        FontMetrics fontMetrics = graphics.getFontMetrics(font);
        int textHeight = fontMetrics.getHeight();
        int totalTextHeight = textHeight * text.split("\n").length;
        int startY = (height - totalTextHeight - spacing * (text.split("\n").length - 1)) / 2;

        // 逐行绘制文字
        String[] lines = text.split("\n");
        for (String line : lines) {
            int textWidth = fontMetrics.stringWidth(line);
            int textX = (width - textWidth) / 2;
            int textY = startY + textHeight;
            graphics.drawString(line, textX, textY);
            startY += textHeight + spacing;
        }

        // 将图片编码为Base64格式字符串
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            ImageIO.write(image, "png", baos);
        } catch (IOException e) {
            log.error("图片生成失败: {}", ExceptionUtils.getStackTrace(e));
        }
        byte[] imageBytes = baos.toByteArray();
        String base64Image = Base64.getEncoder().encodeToString(imageBytes);

        // 保存生成的图片
//        File file = new File("output.png");
//        try {
//            ImageIO.write(image, "png", file);
//            System.out.println("图片生成成功！");
//        } catch (IOException e) {
//            System.out.println("图片生成失败：" + e.getMessage());
//        }

        graphics.dispose();

        return base64Image;
    }

}
