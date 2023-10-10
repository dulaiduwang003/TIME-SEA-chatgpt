'''
FilePath: models.py
Author: yun.huang <1594909346@qq.com>
Date: 2023-08-23 21:58:35
LastEditors: yun.huang <1594909346@qq.com>
LastEditTime: 2023-09-05 18:21:58
Version: 1.0.1
Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
Descripttion: 愿你开心每一天~
'''
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Drawing(models.Model):
    drawing_id = models.BigAutoField(primary_key=True)
    user_id = models.BigIntegerField()
    prompt = models.TextField()
    original_url = models.CharField(max_length=200, blank=True, null=True)
    generate_url = models.CharField(max_length=200, blank=True, null=True)
    is_public = models.IntegerField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()
    env = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'drawing'


class Exchange(models.Model):
    exchange_id = models.BigAutoField(primary_key=True)
    exchange_code = models.CharField(unique=True, max_length=8)
    frequency = models.BigIntegerField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'exchange'


class Orders(models.Model):
    orders_id = models.CharField(primary_key=True, max_length=100)
    user_id = models.BigIntegerField()
    product_id = models.BigIntegerField()
    product_name = models.CharField(max_length=50)
    product_price = models.FloatField()
    state = models.IntegerField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()
    pay_time = models.DateTimeField(blank=True, null=True)
    frequency = models.BigIntegerField()
    reason_failure = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'orders'


class Personality(models.Model):
    personality_id = models.BigAutoField(primary_key=True)
    user_id = models.BigIntegerField()
    model = models.CharField(max_length=50)
    top_p = models.IntegerField()
    max_tokens = models.BigIntegerField()
    temperature = models.IntegerField()
    open_key = models.CharField(max_length=255)
    open_ai_url = models.CharField(max_length=255)
    questions = models.TextField()
    answer = models.TextField()
    speed = models.BigIntegerField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'personality'


class Product(models.Model):
    product_id = models.BigAutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    frequency = models.BigIntegerField()
    product_price = models.FloatField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'product'


class SdModel(models.Model):
    sd_model_id = models.BigAutoField(primary_key=True)
    model_name = models.CharField(max_length=100)
    text_name = models.CharField(max_length=200)
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'sd_model'


class Star(models.Model):
    star_id = models.BigAutoField(primary_key=True)
    user_id = models.BigIntegerField()
    issue = models.TextField()
    answer = models.TextField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'star'


class TSdControlNet(models.Model):
    type_id = models.BigAutoField(primary_key=True)
    module = models.CharField(max_length=500, blank=True, null=True)
    model = models.CharField(max_length=500)
    weight = models.DecimalField(max_digits=3, decimal_places=2)
    guidance_start = models.DecimalField(max_digits=3, decimal_places=2)
    guidance_end = models.DecimalField(max_digits=3, decimal_places=2)
    text = models.CharField(max_length=64)
    type = models.IntegerField()
    type_name = models.CharField(max_length=500, blank=True, null=True)
    is_selected = models.IntegerField(blank=True, null=True)
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 't_sd_control_net'


class User(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    open_id = models.CharField(max_length=180, blank=True, null=True)
    avatar = models.CharField(max_length=200, blank=True, null=True)
    user_name = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=5)
    frequency = models.BigIntegerField()
    is_sign_in = models.IntegerField()
    created_time = models.DateTimeField()
    update_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'user'
