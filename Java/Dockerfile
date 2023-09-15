#
# FilePath: Dockerfile
# Author: yun.huang <1594909346@qq.com>
# Date: 2023-09-6 11:47:28
# LastEditors: yun.huang <1594909346@qq.com>
# LastEditTime: 2023-09-6 11:47:28
# Version: 1.0.1
# Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
# Descripttion: 愿你开心每一天~
#
FROM maven:3.9.4-sapmachine-17 AS builder

COPY settings.xml /usr/share/maven/conf/settings.xml
COPY . /usr/src/mymaven

WORKDIR /usr/src/mymaven

RUN mvn clean package -P docker

FROM openjdk:17-ea-slim-buster

WORKDIR /app

COPY --from=builder /usr/src/mymaven/target/BDTH-SUPER-0.0.1-SNAPSHOT.jar BDTH-SUPER-0.0.1-SNAPSHOT.jar

EXPOSE 8625

CMD ["java", "-jar", "BDTH-SUPER-0.0.1-SNAPSHOT.jar"]
