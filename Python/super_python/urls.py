"""super_python URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path,include, re_path
from django.conf import settings

from apps.picture.views import GetSdControlNetType, SdControlNetDraught

# 媒体文件流式响应
from utils.streamingmedia_response import streamingmedia_serve

urlpatterns = [
    # 处理媒体文件
    path('media/<path:path>', streamingmedia_serve, {'document_root': settings.MEDIA_ROOT}, ),
    path('drawing/sd/get/controlNet/type/', GetSdControlNetType.as_view(), name='SD CN类型'),
    path('drawing/sd/text/controlNet/draught/', SdControlNetDraught.as_view(), name='SD CN内嵌图'),
]
