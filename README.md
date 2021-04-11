# Seurat
## 1 文档规范
1、待做标注为 `//TODO`<\br>
2、已做标注为 `//DONE`
## 2 前言
### 2.1 项目介绍
去年我大概用了半年WordPress博客系统，Seurat正是当时仿写的一款WP主题。<\br>
当时我一心想捣腾一个好看的博客，但网上绝大多数免费的WP主题实在不堪入目，而好看的主题价格又偏高，于是我一怒之下写了Seurat。<\br>
这次回来重新整理项目也算是对当初开发过程的一个回顾，希望能回忆起当初的一些所思所想，并提出该项目的不足、待改进之处。
### 2.2 我再也不用WordPress搭建博客了
1、WordPress会对开发者调用WP函数从数据库中取出的数据进行自发的处理，用自己设定的标签去包裹数据并添加自己设定的类名和id。这种"任性"对于想给这部分数据添加特定样式的开发者造成了不便，而代码的这一系列变化只有在网页调试时看源码才能看到。这意味着如果要给这些数据添加样式，就得先看源码，然后再去css文件中根据源码中WordPress所用的标签、类名去设定样式。<\br>
2、WordPress后台发布文章所用的文档编辑器实在太烂，各种样式上的问题层出不穷，体验相当差。
## 3 使用
-> 下载本项目<\br>
-> 解压后将本项目放在'wordpress/wp-content/themes'目录下，Seurat会自动出现在wordpress后台的主题列表中。<\br>
-> 在wordpress后台选择主题'Seurat'并应用.<\br>
-> 项目界面如下图：
   ![screenshot](screenshot.jpg)
## 4 项目架构
HTML + CSS + JS + PHP + font awesome<\br>
这里可以考虑选用一些库/框架来提高开发效率。			`//TODO`
### 4.1 [font awesome](http://www.bootcss.com/p/font-awesome/)
图标字体库 -- font awesome使用便捷，图标齐全，在开发时免去了我的美工之苦。
## 5 优化
本项目没有选用任何构建工具对图片、文件进行压缩/合并等优化处理，不过当时我从另一角度上对运行性能、代码维护做了一些优化。
#### 5.1 运行性能优化
基本思路：选择合理的HTML结构、CSS样式去实现一个模块。<\br>
"合理"的意思是，在能实现该模块的前提下，该模块的代码量最少。因为不同的HTML结构所需的CSS样式不同，同一模块可选用多种不同的HTML与CSS的组合实现。<\br>
不过在项目优化上，选用一款合适的构建工具应该比抠这些细节提高更多。`//TODO`
#### 5.2 维护效率提升
代码规范主要参照了网易的[NEC](http://nec.netease.com/)。<\br>
不过当时由于太注重这些细节导致开发时间被延长很久。
## 6 不足
#### 6.1 Javascript
1、JS代码还有提升的空间，需多看其他源码和资料，不断改良优化。`//TODO`<\br>
2、在"随机选择一张背景图加载"模块中，如何在随机中增加一定的"记忆性"？`//TODO`<\br>
#### 6.2 移动端
1、项目对移动端基本没有兼容。`//TODO`
