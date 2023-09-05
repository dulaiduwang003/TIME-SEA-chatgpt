package com.cn.bdth.utils;

import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.ObjectMetadata;
import com.cn.bdth.exceptions.UploadException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Base64;
import java.util.Objects;
import java.util.UUID;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class AliUploadUtils {

    @Value("${ali-oss.endpoint}")
    private String endpoint;

    @Value("${ali-oss.accessKey}")
    private String accessKey;

    @Value("${ali-oss.secretKey}")
    private String secretKey;

    @Value("${ali-oss.bucketName}")
    private String bucketName;

    public String uploadFile(final MultipartFile file, final String path, final String newFileName, final boolean isImage) {
        OSS ossClient = new OSSClientBuilder()
                .build(endpoint, accessKey, secretKey);
        try (InputStream inputStream = file.getInputStream()) {
            String originalFileName = file.getOriginalFilename();

            assert originalFileName != null;
            String fileName;
            fileName = Objects.requireNonNullElseGet(newFileName, () -> UUID.randomUUID() + originalFileName.substring(originalFileName.lastIndexOf('.')));

            String filePath = path + "/" + fileName;

            if (isImage) {
                ObjectMetadata objectMetadata = new ObjectMetadata();
                objectMetadata.setContentType("image/jpg");
                ossClient.putObject(bucketName, filePath, inputStream, objectMetadata);
            } else {
                ossClient.putObject(bucketName, filePath, inputStream);
            }

            return "/" + filePath;
        } catch (IOException e) {
            log.error("无法将图片上传到阿里云。错误消息： {} 错误类： {}", e.getMessage(), e.getClass());
            throw new UploadException();
        } finally {
            ossClient.shutdown();
        }
    }

    public String uploadBase64(final String base64, String path) throws IOException {
        byte[] imageBytes = Base64.getDecoder().decode(base64);
        ByteArrayInputStream inputStream = new ByteArrayInputStream(imageBytes);
        // 生成随机的图片文件名
        final String fileName = UUID.randomUUID() + ".jpg";
        MultipartFile multipartFile = new MockMultipartFile(fileName, inputStream);
        return uploadFile(multipartFile, path, fileName, true);
    }

    public void deleteFile(final String filePath) {
        OSS ossClient = new OSSClientBuilder()
                .build(endpoint, accessKey, secretKey);
        try {

            if (filePath.startsWith("/")) {
                ossClient.deleteObject(bucketName, filePath.substring(1));
            } else {
                ossClient.deleteObject(bucketName, filePath);
            }
        } catch (OSSException | ClientException e) {
            log.error("无法从阿里云删除图片。错误消息： {} 错误类： {}", e.getMessage(), e.getClass());
        } finally {
            ossClient.shutdown();
        }


    }

    public String uploadImageFromUrl(String imageUrl, String path, String newFileName) {
        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKey, secretKey);
        try (InputStream inputStream = new URL(imageUrl).openStream()) {
            String fileName = newFileName != null ? newFileName : UUID.randomUUID().toString();
            String filePath = path + "/" + fileName;
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentType("image/jpeg"); // 根据实际情况设置图片类型
            ossClient.putObject(bucketName, filePath, inputStream, objectMetadata);
            return "/" + filePath;
        } catch (IOException e) {
            throw new UploadException();
        } finally {
            ossClient.shutdown();
        }
    }
}
