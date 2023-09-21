-- 修改sd_model 表结构；
alter table sd_model
    add sampler_index  varchar(500) null comment '默认采样方法',
    add sort int null,
    add prompt varchar(500) null comment '默认正向提示词',
    add negative_prompt varchar(500) null comment '默认反向提示词',
    add is_selected tinyint default 0 null comment '是否默认选中',
    add del_flag tinyint default 0 not null comment '0:未删除；1:已删除';

-- 修改drawing 表结构
alter table drawing
    add del_flag tinyint default 0 not null comment '删除标识';

-- sd-controlNet数据表
create table if not exists t_sd_control_net
(
    id             bigint auto_increment
        primary key,
    module         varchar(500)                        null comment '预处理器',
    model          varchar(500)                        not null comment '模型名称',
    weight         decimal(3, 2)                       not null comment '权重',
    guidance_start decimal(3, 2)                       not null comment '开始介入',
    guidance_end   decimal(3, 2)                       not null comment '结束介入',
    text           varchar(64)                         not null comment '描述',
    type           int                                 not null comment '-1:隐藏文字；0:人物；1:人物； 2:二维码',
    type_name      varchar(500)                        null comment 'controlNet类型名称',
    sort           int                                 null,
    is_selected    tinyint   default 0                 null comment '是否默认选中',
    del_flag       tinyint   default 0                 not null comment '0:未删除；1:已删除',
    create_time    timestamp default CURRENT_TIMESTAMP not null
);

-- 系统日志表
create table if not exists sys_log
(
    id            bigint auto_increment
        primary key,
    log_content   varchar(1000)                      null comment '日志内容',
    user_id       bigint                             not null comment '操作用户账号',
    user_name     varchar(100)                       null comment '操作用户名称',
    ip            varchar(100)                       null comment 'IP',
    method        varchar(500)                       null comment '请求java方法',
    request_param longtext                           null comment '请求参数',
    cost_time     bigint                             null comment '耗时',
    create_time   datetime default CURRENT_TIMESTAMP not null comment '创建时间'
)
    comment '系统日志表'