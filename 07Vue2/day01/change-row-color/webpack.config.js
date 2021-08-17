const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const htmlplugin = new HtmlPlugin({
    "template": "./src/index.html",
    "filename": "./index.html"
})
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  cleanwebpackplugin = new CleanWebpackPlugin();
module.exports = {
    "mode": "development",
    "entry": path.join(__dirname, "./src/index.js"),
    "output": {
        "path": path.join(__dirname, "dist"),
        "filename": "js/bundle.js"
    },
    "plugins": [htmlplugin,cleanwebpackplugin],
    "devServer": {
        open: true,
        port: 8088,
        host: "127.0.0.1"
    },
    "module":{
        "rules":[
            {"test":/\.js$/,"use":["babel-loader"],"exclude":/node_modules/},
            {"test":/\.css$/,"use":["style-loader","css-loader"]},
            {"test":/\.less$/,"use":["style-loader","css-loader","less-loader"]},
            {"test":/\.png|\.jpg|\.gif$/,"use":["url-loader?limit=30000&outputPath=images"]},
        ]
    },
    "devtool":"eval-source-map",
    "resolve":{
        "alias":{
            "@":path.join(__dirname,"./src/")
        }
    }
}