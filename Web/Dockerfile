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
FROM node:16 AS builder

WORKDIR /app

ADD . .

RUN npm config set registry https://registry.npmmirror.com \
    && npm install \
    && npm run build

FROM nginx:1.25.2-alpine3.18-perl

WORKDIR /usr/share/nginx/html/

COPY --from=builder /app/dist /usr/share/nginx/html/super_web
COPY super_web.conf /etc/nginx/conf.d/super_web.conf
COPY crt /etc/nginx/crt

EXPOSE 80 443

CMD [ "nginx", "-g", "daemon off" ]
