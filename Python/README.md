部署步骤参考，本项目只支持python3
配置部分
1. 修改settings_example.py和config_example.py为settings.py和config.py
2. 配置config.py

数据部分
1. 先将原数据库数据导出成sql文件
```
# 先将用户表的字段补全再导出数据！！！
mysqldump -u root -p -t super_bot > super_bot.sql
```
2. 删除数据库
```
mysql -uroot -p -e "drop database super_bot;"
```
3. 创建新数据库
```
mysql -uroot -p -e "CREATE DATABASE super_bot CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```
4. 安装python扩展
```
# centos
yum install mysql-devel
# ubuntu
apt-get install libmysqlclient-dev
# 根据系统执行上面的命令
pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```
5. 创建python的sql文件
```
python3 manage.py makemigrations
```
6. 执行python的sql文件
```
python3 manage.py migrate
```
7. 导入sql文件
```
mysql -uroot -p super_bot < super_bot.sql
```
8. 将后端证书放置在项目根目录
9. 启动项目
```
/usr/local/bin/uwsgi --ini wsgi.ini
```
10. 微信小程序域名白名单增加8626端口
