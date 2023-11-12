# jlg_generate_by_swagger
为jlg前端项目根据后端的swagger文档生成前端代码（Typescript，Axios）。

## 安装
`npm i jlg_generate_by_swagger@latest -D`或`npm i jlg_generate_by_swagger@latest -g`

## 使用方法（局部安装）
1>: 在项目根目录中创建`.generateSwaggerrc`文件，内容如下：
```
{
    // 远程swagger.json文件URL
    "swaggerUrl": "http://10.1.2.9:10031/swagger/v1/swagger.json",
    // 生成的swagger.json文件路径，默认src/apiType/swagger.json
    "swaggerFileName": "src/apiType/swagger.json",
    // 生成的接口文件路径，默认src/apiType/api.ts
    "resultFileName": "src/apiType/result.ts",
    // 生成文件中的Typescript类型命名前缀，默认AT_
    "interfaceNamePrepend": "AT_",
    // 封装的axios实例引入路径，默认import axios from '@/request/index'
    "axiosUrl": "import axios from '@/axios/index'"
}
```

2>: 在`package.json`中添加如下命令：
```json
    "scripts": {
        // ...其它命令
        "jlg_generate_by_swagger": "npx jlg_generate_by_swagger"
    },
```

3>: 启动终端，在项目根目录下执行命令：`npm run jlg_generate_by_swagger`等待一段时间之后将会在src文件夹中生成apiType文件夹，文件夹中包含`swagger.json`和`result.ts`文件。

## 使用方法（全局安装）
1>: 在项目根目录中创建`.generateSwaggerrc`文件，内容如下：
```
{
    // 远程swagger.json文件URL
    "swaggerUrl": "http://10.1.2.9:10031/swagger/v1/swagger.json",
    // 生成的swagger.json文件路径，默认src/apiType/swagger.json
    "swaggerFileName": "src/apiType/swagger.json",
    // 生成的接口文件路径，默认src/apiType/api.ts
    "resultFileName": "src/apiType/result.ts",
    // 生成文件中的Typescript类型命名前缀，默认AT_
    "interfaceNamePrepend": "AT_",
    // 封装的axios实例引入路径，默认import axios from '@/request/index'
    "axiosUrl": "import axios from '@/axios/index'"
}
```

2>: 启动终端，在项目根目录下执行命令：`jlg_generate_by_swagger`等待一段时间之后将会在src文件夹中生成apiType文件夹，文件夹中包含`swagger.json`和`result.ts`文件。

## 特性

## 示例

## API文档

## 许可证
Apache

## 作者/维护者
LiuJie wx:steady_silence

## 常见问题（FAQ）
1>: 提示类似如下Error代表无法连接远程swagger.json的URL，检测URL拼写是否正确，电脑VPN是否正常连接，后端服务是否正常启动
```
node:internal/process/promises:279
            triggerUncaughtException(err, true /* fromPromise */);
            ^
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled 
with .catch(). The promise rejected with the reason "下载Swagger JSON文件时发生错误:connect ETIMEDOUT 10.1.2.9:10031".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

 *  终端进程“C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe -Command npm run jlg_generate_by_swagger”已终止，退出代码: 1。
```

2>: 如遇其它问题，请及时联系开发人员

## 参考资料
