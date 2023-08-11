create table if not exists drawing
(
    drawing_id      bigint auto_increment comment '绘图ID'
        primary key,
    user_id         bigint                             not null comment '所属用户',
    prompt          text                               not null comment '提示词',
    negative_prompt text                               null comment '反向提示词',
    original_url    varchar(200)                       null comment '上传图',
    generate_url    varchar(200)                       null comment '生成图',
    is_public       tinyint  default 0                 not null comment '是否公开',
    created_time    datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time     datetime default CURRENT_TIMESTAMP not null comment '修改时间'
);

create index drawing_generate_url_index
    on drawing (generate_url);

create index idx_created_time
    on drawing (created_time);

create index idx_is_public
    on drawing (is_public);

create index idx_update_time
    on drawing (update_time);

create index idx_user_id
    on drawing (user_id);

create table if not exists exchange
(
    exchange_id   bigint auto_increment comment '兑换码ID'
        primary key,
    exchange_code varchar(8)                         not null comment '兑换码',
    frequency     bigint                             not null comment '兑换码所含Ai币',
    created_time  datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time   datetime default CURRENT_TIMESTAMP not null comment '修改时间',
    constraint exchange_code
        unique (exchange_code)
);

create index idx_created_time
    on exchange (created_time);

create index idx_exchange_code
    on exchange (exchange_code);

create index idx_frequency
    on exchange (frequency);

create index idx_update_time
    on exchange (update_time);

create table if not exists orders
(
    orders_id      varchar(100)                       not null
        primary key,
    user_id        bigint                             not null,
    product_id     bigint                             not null,
    product_name   varchar(50)                        not null,
    product_price  double                             not null,
    state          tinyint                            not null,
    created_time   datetime default CURRENT_TIMESTAMP not null,
    update_time    datetime default CURRENT_TIMESTAMP not null,
    frequency      bigint                             not null,
    reason_failure varchar(50)                        null,
    pay_time       datetime                           null
);

create index orders_product_id_index
    on orders (product_id);

create index orders_state_index
    on orders (state);

create index orders_user_id_index
    on orders (user_id);

create table if not exists product
(
    product_id    bigint auto_increment
        primary key,
    product_name  varchar(100)                       not null,
    frequency     bigint                             not null,
    product_price double                             not null,
    created_time  datetime default CURRENT_TIMESTAMP not null,
    update_time   datetime default CURRENT_TIMESTAMP not null
);

create index product_product_name_index
    on product (product_name);

create table if not exists star
(
    star_id      bigint auto_increment comment '主键'
        primary key,
    user_id      bigint                             not null comment '所属用户',
    issue        longtext                           not null comment '问题',
    answer       longtext                           not null comment '答案',
    created_time datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time  datetime default CURRENT_TIMESTAMP not null comment '修改时间'
);

create index idx_created_time
    on star (created_time);

create index idx_update_time
    on star (update_time);

create index idx_user_id
    on star (user_id);

create table if not exists user
(
    user_id      bigint auto_increment comment '主键'
        primary key,
    open_id      varchar(180)                       not null comment '微信用户标识',
    avatar       varchar(200)                       null comment '用户头像',
    user_name    varchar(100)                       null comment '用户微信昵称',
    frequency    bigint   default 0                 not null comment 'Ai币',
    is_sign_in   tinyint  default 0                 not null comment '是否签到',
    created_time datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time  datetime default CURRENT_TIMESTAMP not null comment '修改时间'
);

create index idx_created_time
    on user (created_time);

create index idx_frequency
    on user (frequency);

create index idx_open_id
    on user (open_id);

create index idx_update_time
    on user (update_time);

