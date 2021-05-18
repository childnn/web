正规打包流程: /02-config/readme.txt 说明的是没有外部依赖时的简单操作方式.
以下三步是正常的流程
---------------------
1. npm init   # 生成 package.json
2. npm install # 安装依赖 生成 package-lock.json
3. webpack --mode development