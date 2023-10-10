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
FROM python:3.10.13-slim-bullseye

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN cp /etc/apt/sources.list /etc/apt/sources.list.ori \
    && sed -i s@/deb.debian.org/@/mirrors.ustc.edu.cn/@g /etc/apt/sources.list \
    && apt clean \
    && apt-get update \
    && apt-get install -y --no-install-recommends build-essential libpq-dev default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /tmp/requirements.txt

RUN pip install --no-cache-dir -r /tmp/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && rm -rf /tmp/requirements.txt 

WORKDIR /app

COPY . .

EXPOSE 8626

CMD [ "python3", "manage.py", "makemigrations", "&&", "python3", "manage.py", "migrate" ]
