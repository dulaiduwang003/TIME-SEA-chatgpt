package com.cn.bdth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * 我会发着呆 然后忘记你
 *
 * @author 时间海 @github dulaiduwang003
 */
@SpringBootApplication
@EnableScheduling
@EnableAsync
@EnableAspectJAutoProxy

public class BdthSuperApplication {

    public static void main(String[] args) {
        SpringApplication.run(BdthSuperApplication.class, args);
    }


}
