# Awesome OpenAI functions

[View English Version Introduction](README.md)

## 目标

OpenAI的函数调用机制（Function calling）十分强大，但函数的开发和调试都比较麻烦，互联网也缺少这方面的工具和资源。

本项目旨在创建一个“开箱即用”的共享函数集，并提供一些函数开发相关的资源和技术框架，让开发者可以更容易地将外部函数与大语言模型的API集成起来，实现自己想要的功能。

## 函数使用方法

在函数列表中，点击进入函数的详情页并在其中复制函数的定义，就可以通过 [ConsoleOne AI 工作台](https://console.evalsone.com/)轻松测试函数的调用。

## 函数列表


* [天气查询 (get_current_weather)](info/get_current_weather.md)
* [汇率查询 (get_exchange_rate)](info/get_exchange_rate.md)
* [获取Hacker news最新内容 (get_top_hacker_news)](info/get_top_hacker_news.md)
* 生成MidJourney提示语
* 快速获取视频内容摘要
* 查询商品价格

列表中的函数主要来源有：
1. 由本项目的作者和参与者实现并共享
2. 通过ChatGPT的Plugin配置转化生成（详见https://consolex.ai/plugins）

## 开发函数
开发函数有很多方法，可以使用Python、Nodejs、java、php等人和编程语言，这里收集一些快速开发函数的资源和方法。

## 社区讨论
如果你喜欢OpenFunction项目，并希望为它贡献一份力量，丰富OpenFunction的函数库，可以 [加入Discord服务器](https://discord.gg/JRcM2x4Rf) 一起讨论。


## 使用现有的函数

使用一个现有的函数测试函数调用十分简单，以下是具体步骤：

### 1. 初始化配置
从Github中将本项目克隆到本地，然后运行 ```npm install``` 安装必要的扩展。
然后将 .env.example 文件 复制为 .env 文件，在其中用来存放项目相关的API Key等。
```
cp .env.example .env
```
你可以将.env文件中的 EXPECTED_API_KEY 的值换成任何自定义的字符串，用来设置函数的访问权限，然后将 EXPECTED_API_KEY 的值填写到ConsoleOne工作台的函数调用设置中。

如果你不希望通过API Key验证函数访问权限，将EXPECTED_API_KEY 的值设为空即可。

### 2. 设置函数描述
以实现获取天气信息的函数 getCurrentWeather.js 为例，首先将与getCurrentWeather函数相关的复制并粘贴到ConsoleOne工作台的函数调用设置中。

### 3. 通过Vercel部署函数
要想快速使用一个现有的函数，最简单的方式是将函数部署到Vercel上，以下是具体的流程：

如果你没有安装Vercel，首先全局安装Vercel：
```
npm i -g vercel
```

首先在Vercel上创建用户，然后在项目根目录下初始化一个Vercel项目：
```
vercel
```
跟随向导一步步完成操作即可。

你可以先在本地搭建测试环境进行测试：
```
vercel dev
```
这将会在本地启动一个测试环境，并显示在终端上。我们以: http://localhost:3000 为例，这时你的函数调用路径就是：http://localhost:3000/api/

将该路径填写到ConsoleOne工作台的「函数调用路径」输入框中，然后打开「启用OpenAI函数调用」开关，并且关闭「Steam模式」开关。（在stream模式下暂不能发起对外部函数的调用），你就可以通过ConsoleOne工作台测试函数调用是否生效。

你可以向OpenAI的GPT模型问一个与本地天气相关的问题：
```
今天伦敦的天气如何？
```

大多数情况下OpenAI的GPT模型会调用天气函数调用getCurrentWeather回答你的问题，若函数调用生效，在AI的回答下方会显示一个绿色信息框，点击信息框可以在弹出窗口内看到函数调用中间过程的详细信息。

在本地调试通过后，你可以通过
```
vercel --prod
```
将函数发布到互联网上。发布成功之后，你需要将ConsoleOne工作台中的函数调用路径更换成Vercel生产环境的域名，并且将.env中用到的环境变量设置到Vercel项目的环境变量设置中。即可不依赖本地环境更方便的调用函数。

## 实现一个新函数
你想写一个新函数来实现一个特定功能也很简单！你只需写一个新的nodejs函数，并将函数放在 /API 目录下，然后按照同样的步骤在ConsoleOne工作台进行设置，并对函数进行测试和部署。

现在，你可以打开脑洞，动手实现自己的云函数！事实上，你可以通过云函数实现专属于你自己的OpenAI的“插件系统”，为自己的工作和生活提供便利！

## 为OpenFunction项目贡献力量
由于时间和精力有限，我目前只实现了查询天气和汇率转换两个示例函数。如果你喜欢OpenFunction项目，并希望为它贡献一份力量，丰富OpenFunction的函数库，你可以将你写好的函数放到 /API 目录下，并将关于函数结构的描述放在 /function_description 目录的 function_desc.json 文件中，然后发起一个pull request即可。

如果你对本项目感兴趣，也欢迎 [加入Discord服务器](https://discord.gg/JRcM2x4Rf) 一起讨论。

并利用 [ConsoleOne AI 工作台](https://console.evalsone.com/) 调试函数调用效果。