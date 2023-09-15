###
 # @FilePath: init.sh
 # @Author: yun.huang <1594909346@qq.com>
 # @Date: 2023-09-06 20:11:16
 # @LastEditors: yun.huang <1594909346@qq.com>
 # @LastEditTime: 2023-09-15 14:00:18
 # @Version: 1.0.1
 # Copyright: 2023 YunYou Innovation Technology Co., Ltd. All Rights Reserved.
 # @Descripttion: 愿你开心每一天~
### 
#!/bin/bash
clear
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'
lan='\033[0;36m'
youchatai (){
echo -e
echo -e ${yellow}系统要求：常规服务器,centos最好用7.9版本,8版本就是坑${plain};
echo -e ${yellow}最低2H2G，但推荐至少2H4G${plain};
echo -e ${yellow}先确认放行防火墙安全组（在你购买的服务器控制版面）${plain};
echo -e ${yellow}最后更新时间：2023-09-06${plain};
echo -e "
  ${green}0.${plain} 退出脚本
————————————————
  ${green}1.${plain} centos系列初始化
  ————————————————
  ${green}2.${plain} ubuntu系列初始化
  ————————————————
  ${green}3.${plain} 一键部署
  ————————————————
  ${green}4.${plain} 数据库升级
————————————————
"
    echo -e && read -p "请输入选择 [0-4]: " num

    case "${num}" in
        0) exit 0
        ;;
        1) centos_init
        ;;
        2) ubuntu_init
        ;;
        3) one_deployment
        ;;
        4) mysql_update
        ;;
        *) echo -e "${red}请输入正确的数字 [0-4]${plain}"
        ;;
    esac
}

centos_init (){
    echo -e "\033[44;37m  开始安装docker-ce...  \033[0m"
    # 备份
    mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
    # 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/
    curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
    # 运行 yum makecache 生成缓存
    yum makecache
    # 安装必要的一些系统工具
    yum install -y yum-utils device-mapper-persistent-data lvm2
    # 添加软件源信息
    yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
    # 更新并安装Docker-CE
    yum makecache fast
    yum -y install docker-ce
    # 开启Docker服务
    service docker start
    echo -e "\033[44;37m  开始安装docker-compose...  \033[0m"
    cp docker-compose /usr/local/bin/docker-compose
    # 增加权限
    chmod +x /usr/local/bin/docker-compose
    echo -e "\033[44;37m  初始化完成...  \033[0m"
}

ubuntu_init (){
    echo -e "\033[44;37m  开始安装docker-ce...  \033[0m"
    # 备份
    cp /etc/apt/sources.list /etc/apt/sources.list.backup
    # 修改软件源
    sed -i s@/deb.debian.org/@/mirrors.ustc.edu.cn/@g /etc/apt/sources.list
    # 更新软件源
    apt clean
    apt-get update
    # 安装必要的一些系统工具
    apt-get -y install apt-transport-https ca-certificates curl software-properties-common
    # 安装GPG证书
    curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
    # 写入软件源信息
    add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
    # 更新并安装Docker-CE
    apt-get -y update
    apt-get -y install docker-ce
    # 开启Docker服务
    service docker start
    echo -e "\033[44;37m  开始安装docker-compose...  \033[0m"
    cp docker-compose /usr/local/bin/docker-compose
    # 增加权限
    chmod +x /usr/local/bin/docker-compose
    echo -e "\033[44;37m  初始化完成...  \033[0m"
}

one_deployment (){
    echo -e "\033[44;37m  开始一键部署...  \033[0m"
    mkdir -p /data/mysql/data
    mkdir -p /data/redis/data
    docker-compose up -d
    echo -e "\033[44;37m  部署完成...  \033[0m"
}

mysql_update (){
    echo -e "\033[44;37m  开始进行数据库升级...  \033[0m"
    read -p "请输入数据库密码: " mysql_passwd
    export mysql_passwd="$mysql_passwd"
    if [ -n "${mysql_passwd}" ]; then
        mysqldump -u root -p${mysql_passwd} -t super_bot > ~/super_bot_bf.sql
        mysql -uroot -p${mysql_passwd} -e "ALTER TABLE super_bot.drawing DROP COLUMN negative_prompt, ADD env tinyint DEFAULT 0 NOT NULL, ADD INDEX drawing_env_index (env);"
        mysql -uroot -p${mysql_passwd} -e "CREATE TABLE IF NOT EXISTS super_bot.sd_model (sd_model_id bigint AUTO_INCREMENT PRIMARY KEY, model_name varchar(100) NOT NULL, text_name varchar(200) NOT NULL, created_time datetime DEFAULT CURRENT_TIMESTAMP NOT NULL, update_time datetime DEFAULT CURRENT_TIMESTAMP NOT NULL); CREATE INDEX sd_model_model_name_text_name_index ON super_bot.sd_model (model_name, text_name);"
        mysqldump -u root -p${mysql_passwd} -t super_bot > ~/super_bot.sql
        echo -e "\033[44;37m  数据库升级完成...  \033[0m"
    else
        echo -e "\033[44;37m  数据库密码都不填，你这是在干啥？  \033[0m"
    fi
}

youchatai
