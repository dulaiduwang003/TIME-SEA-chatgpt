create table if not exists super_bot.drawing
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
    on super_bot.drawing (generate_url);

create index idx_created_time
    on super_bot.drawing (created_time);

create index idx_is_public
    on super_bot.drawing (is_public);

create index idx_update_time
    on super_bot.drawing (update_time);

create index idx_user_id
    on super_bot.drawing (user_id);

create table if not exists super_bot.exchange
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
    on super_bot.exchange (created_time);

create index idx_exchange_code
    on super_bot.exchange (exchange_code);

create index idx_frequency
    on super_bot.exchange (frequency);

create index idx_update_time
    on super_bot.exchange (update_time);

create table if not exists super_bot.orders
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
    pay_time       datetime                           null,
    frequency      bigint                             not null,
    reason_failure varchar(50)                        null
);

create index orders_product_id_index
    on super_bot.orders (product_id);

create index orders_state_index
    on super_bot.orders (state);

create index orders_user_id_index
    on super_bot.orders (user_id);

create table if not exists super_bot.product
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
    on super_bot.product (product_name);

create table if not exists super_bot.star
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
    on super_bot.star (created_time);

create index idx_update_time
    on super_bot.star (update_time);

create index idx_user_id
    on super_bot.star (user_id);

create table if not exists super_bot.user
(
    user_id      bigint auto_increment comment '主键'
        primary key,
    open_id      varchar(180)                                     null comment '微信用户标识',
    avatar       varchar(200)                                     null comment '用户头像',
    user_name    varchar(100)                                     null comment '用户微信昵称',
    email        varchar(200)                                     null,
    password     varchar(255)                                     null,
    type         enum ('ADMIN', 'USER') default 'USER'            not null,
    frequency    bigint                 default 0                 not null comment 'Ai币',
    is_sign_in   tinyint                default 0                 not null comment '是否签到',
    created_time datetime               default CURRENT_TIMESTAMP not null comment '创建时间',
    update_time  datetime               default CURRENT_TIMESTAMP not null comment '修改时间'
);

create index idx_created_time
    on super_bot.user (created_time);

create index idx_frequency
    on super_bot.user (frequency);

create index idx_open_id
    on super_bot.user (open_id);

create index idx_update_time
    on super_bot.user (update_time);

create index user_email_password_index
    on super_bot.user (email, password);

