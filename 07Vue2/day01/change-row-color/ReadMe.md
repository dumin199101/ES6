## 项目案例
1. 新建空白目录，执行npm init -y命令，初始化包管理配置文件pacage.json
2. 新建src目录，存放源代码
3. 运行npm install jquery -S命令，安装jQuery
4. 使用ES6语法导入jQuery
5. 初始化文件结构：ul > li{第 $ 个li元素} * 9

## 项目安装webpack
1. 执行命令，安装webpack两个相关的包：
   npm i webpack@5.42.1 webpack-cli@4.7.2 -D

## 项目中配置webpack
1. 项目根目录中创建webpack.config.js的配置文件
   module.exports = {
       mode: "development"
   }
   开发时用development模式,上线时用production模式
2. 在package.json的scripts节点下，新增dev脚本
   "scripts": {
       "dev": "webpack"
    }
3. 终端运行npm run dev,对项目进行打包构建
   在根目录下生成dist文件夹，文件夹下生成main.js
   main.js中合并index.js跟jquery.js

## webpack中的默认约定
1. 默认打包入口文件为src->index.js
2. 默认输出文件为dist->main.js
3. 在配置文件中配置入口文件跟输出文件：
const path = require("path")
module.exports = {
    "mode": "development",
    "entry": path.join(__dirname,"./src/index.js"),
    "output": {
        "path": path.join(__dirname,"dist"),
        "filename": "bundle.js"
    }
}

## webpack中的插件
1. webpack-dev-server: 修改源代码，项目自动打包构建
下载：
npm install webpack-dev-server@3.11.2 -D
配置：
"scripts": {
    "dev": "webpack serve"
},
module.exports = {
    "devServer": {
        open: true,
        port: 8088,
        host: "127.0.0.1"
    }
}
注意：
实时打包构建生成的文件存储在内存中

2. html-webpack-plugin
下载：
npm install html-webpack-plugin@5.3.2 -D
配置：
const HtmlPlugin = require("html-webpack-plugin")
const htmlplugin = new HtmlPlugin({
        "template": "./src/index.html",
        "filename": "./index.html"
    })
module.exports = {
    "plugins": [htmlplugin]
}

## webpack中的loader
作用：webpack默认只能打包.js文件，通过不同loader加载器可以打包其它类型文件。

### css加载器
1.npm i style-loader@3.0.0 css-loader@5.2.6 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
    "rules":[
        {"test":/\.css$/,"use":["style-loader","css-loader"]}
    ]
}
loader加载器调用顺序：从后向前

### less加载器
1.npm i less-loader@10.0.1 less@4.1.1 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
    "rules":[
        {"test":/\.less$/,"use":["style-loader","css-loader","less-loader"]}
    ]
}

### 图片加载器
1.npm i url-loader@4.1.1 file-loader@6.2.0 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
        "rules":[
            {"test":/\.png|.jpg|.gif$/,"use":["url-loader?limit=30000"]},
        ]
    }
limit参数：指定图片大小，只有小于设定参数，才会被转为base64格式

### babel加载器
作用：处理js高级语法
1.npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
    "rules":[
        {"test":/\.js$/,"use":["babel-loader"],"exclude":/node_modules/},
    ]
}
3.在项目根目录下创建babel.config.js
module.exports = {
    plugins:[
        [
            '@babel/plugin-proposal-decorators',
            {legacy:true}
        ]
    ]
}

//装饰器
function info(target){
    target.info = 'Person info';
}

@info
class Person{}

console.log(Person.info)


## 导入样式、图片
在webpack中一切皆模块
import './css/index.css'
import './css/index.less'
import logo from './images/logo.png'

