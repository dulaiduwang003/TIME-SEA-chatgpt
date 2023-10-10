'''
FilePath: pagination.py
Author: yun.huang <1594909346@qq.com>
Date: 2023-05-14 22:39:11
LastEditors: yun.huang <1594909346@qq.com>
LastEditTime: 2023-05-14 22:39:11
Version: 1.0.1
Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
Descripttion: 愿你开心每一天~
'''
# -*- coding: utf-8 -*-
from collections import OrderedDict

from django.core import paginator
from django.core.paginator import Paginator as DjangoPaginator
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.core.paginator import InvalidPage
from rest_framework.exceptions import NotFound

class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "limit"
    max_page_size = 999
    django_paginator_class = DjangoPaginator

    def paginate_queryset(self, queryset, request, view=None):
        """
        重写paginate_queryset让分页超过正常分页:有原来的4000错误无效页面。改写为返回2000成功，data=[]提示
        """
        page_size = self.get_page_size(request)
        if not page_size:
            return None
        paginator = self.django_paginator_class(queryset, page_size)
        page_number = self.get_page_number(request, paginator)
        try:
            self.page = paginator.page(page_number)
        except InvalidPage as exc:
            self.page = []

        if paginator.num_pages > 1 and self.template is not None:
            self.display_page_controls = True

        self.request = request
        return list(self.page)

    def get_paginated_response(self, data):
        code = 2000
        msg = 'success'
        currentPage = int(self.get_page_number(self.request, paginator)) or 1
        limit = int(self.get_page_size(self.request)) or 10
        total = self.page.paginator.count if self.page else 0
        res = {
            "page": currentPage,
            "total": total,
            "limit": limit,
            "data": data
        }
        if not data:
            code = 2000
            msg = "暂无数据"
            res['data'] = []

        return Response(OrderedDict([
            ('code', code),
            ('msg', msg),
            ('data', res),
        ]))
