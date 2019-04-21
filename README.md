# Parser
微信小程序富文本插件（本文档动态更新，建议加星收藏）
## 立即体验 ##
![体验小程序](https://i.imgur.com/Z4dqRdC.jpg)
## 功能介绍 ##
- 支持解析`<style>`标签中的全局样式  
  支持按`标签名`匹配（`body{...}`）、按`class`匹配（`.demo{...}`）、按`id`匹配（`#demo{...}`）；但仅支持一层，如`.demo1 #demo2{...}`仅会被解析为`.demo1{...}`  
	示例：
	``` html
	<style>
	.demo1{
	 text-align:center;
	}
	#demo2{
	 color:blue;
	}
	</style>
	<div class="demo1">
	 <span>Hello </span>
	 <span id="demo2">World!</span>
	</div>
	```
  ![解析style](https://i.imgur.com/SWvNe9y.png)

- 支持的标签种类丰富，包括`视频`、`表格`等  
  在[`rich-text`组件的基础](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)上增加支持以下标签: 
  
  | 标签 | 属性 |
  |:---:|:---:|
  | video | src, controls, loops, height, width |
  | audio | src, controls, loops, [poster, name, author](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html) |
  | font | face, color |
  | style |  |
  | section |  |
  | html |  |
  | body |  |
  
  示例：  
  ![解析表格](https://i.imgur.com/6NgFTgt.png)  
  ![解析文字](https://i.imgur.com/O0WdTNw.png)  
  ![解析文字](https://i.imgur.com/Lk2jEAO.png)
- 图片支持大小自适应，点击图片可以预览（预览时通过左右滑动可以查看所有图片）  

  ![解析图片](https://i.imgur.com/gLu9CnI.gif)  
  ![解析视频和音频](https://i.imgur.com/lLaB8tx.png)
- 点击`a`标签，若`href`为小程序内部页面路径，将直接跳转；若是网页链接，则`长按`可以复制链接，并在浏览器中打开；点击时将有`阴影`的效果，支持图片链接。若该链接不需要跳转，可加上`ignore`属性（`<a ignore href="..."></a>`），点击将没有效果  
  示例：  
  ![解析链接](https://i.imgur.com/erCV04i.gif) 
- 支持解析有序列表和无序列表（直接由`rich-text`进行显示）  
  ![解析列表](https://i.imgur.com/grcdHYJ.png)
 
- 容错性强，稳定性高，不需要网络请求  
  以下情况都可以正常解析：
  ``` html
  <!--冒号不匹配-->
  <div style="font-family:"宋体";text-align:center;">Hello</div>
  <!--标签首尾不匹配-->
  <div> World</label>
  <!--异形标签-->
  <o:p></o:p>
  <!--缺少尾标签-->
  <div>!
  ```  
 
- 功能强大，支持无限层级，解析速度快，包大小仅约`33KB`  
## 使用方法 ##
1. 下载Parser文件夹至小程序目录  
   ![目录结构](https://i.imgur.com/BqZWAuj.png)
   
2. 在需要引用的页面的`json`文件中添加
   ``` json
   {
     "usingComponents": {
       "Parser":"../../Parser/index"
     }
   }
   ```
3. 在需要引用的页面的`wxml`文件中添加  
   ``` html
   <Parser html="{{html}}" bindparser="parser" />
   ```
4. 在需要引用的页面的`js`文件中添加  
   ``` javascript
   onLoad:function(){
     this.setData({
       html:'your html'
     })
   },
   parser:function(e){
     console.log(e);
   }
   ```
- 组件属性：  

  | 属性 | 类型 | 默认值 | 必填 | 说明 |
  |:----:|:----:|:----:|:----:|:----:|
  | html | String/Object/Array | | 是 | 要显示的富文本数据，具体格式见下方说明 |
  | space | String | nbsp | 否 | 是否显示连续空格，合法输入值见下方说明 |
  | selectable | Boolean | true | 否 | 是否允许长按复制a标签连接 |
  | preview | Boolean | true | 否 | 是否允许预览图片 |
  | lazyload | Boolean | false | 否 | 图片是否开启懒加载 |
  | tagStyle | Object | {} | 否 | 设置标签的默认样式 |
  
  - html格式：
    1. `string`类型：一个`html`字符串，例如：`<div>Hello World!</div>`
    2. `object`类型：一个形如`{ nodes:[Array],imgList:[Array] }`的结构体，其中nodes数组的格式基本同[rich-text](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)，对于该节点下有`img`，`video`，`a`标签的，需要将`continue`属性设置为`true`，否则将直接使用`rich-text`组件渲染，可能导致图片无法预览，链接无法点击等问题，imgList为其中所有图片地址的数组（回调函数`bindparser`的返回值就是这样的结构体）
    3. `array`类型：格式要求同上（用此格式传入预览图片时，将`不能`通过左右滑动查看所有图片）  
    4. 使用b, c方法可以节省解析的时间，提高性能
  - space格式（同[rich-text](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)）：
    
    | 值 | 说明 |
    |:----:|:----:|
    | ensp | 中文字符空格一半大小 |
    | emsp | 中文字符空格大小 |
    | nbsp | 根据字体设置的空格大小 |  
  - 关于preview和selectable  
    &emsp;&emsp;该属性为`true`时，是通过模板的循环解析实现图片的预览和链接的点击，这可能导致在排版较为复杂时显示不出正确的效果，此时可以将该属性设置为`{{false}}`，插件会直接用`rich-text`组件渲染，能达到更好的排版效果，提高渲染速度。另外插件支持对图片和链接进行单独设置，对于一些装饰性的图片，可以设置`ignore`属性（`<img ignore src="..." />`），这张图片将不会被预览；`a`标签也可以设置`ignore`属性，设置后将没有点击效果；但可能能有更好的显示效果。
  - 关于tagStyle  
    可以设置标签的默认样式，如`{ body:"margin:5px" }`
  - 回调函数
  
    | 名称 | 功能 | 说明 |
    |:----:|:----:|:----:|
    | bindparser | 在解析完成时调用（仅当传入的html为`字符串`时会调用） | 返回一个`object`, 其中`nodes`为解析后的节点数组， `imgList`为图片列表，该object可以在下次调用直接作为html属性的值，节省解析的时间  
  - 其他  
    `table`, `ol`, `ul`, `h1,2,3,4,5,6` 标签由于较难通过模板循环的方式显示，将直接通过`rich-text`进行渲染，因此请尽量避免在表格，列表中加入图片或链接，否则将无法预览或点击（但可以正常显示）
  - 关于基础库
  
    | 版本 | 功能 | 覆盖率 |
    |:---:|:---:|:---:|
    | >=2.4.1 | 全部正常 | 96.22% |
    | 1.6.6-2.4.0 | 无法显示连续空格 | 3.67% |
    | <1.6.6 | 无法使用 | 0.09% |

## 后端解析 ##
为提高页面性能，可以在服务器端提前解析好`html`，该插件同样可以在`node.js`中使用（只需要`Parser`文件夹下的 `DomHandler.js`, `Parser.js`, `Tokenizer.js`即可）  
具有的功能：
1. 删除`script`, `head`, `html`, 注释等无用的标签
2. 将`style`标签中的样式解析到各标签的`style`中，例如：
``` javascript
const Parser=require('./Parser.js');
var html='<style>.demo{text-align:center}</style><div class="demo">Hello World!</div>';
var options={
  preview:true,  //图片是否需要预览，默认true
  selectable:true  //a标签是否需要复制链接，默认true
  tagStyle:{div:"margin:5px"} //标签的默认样式
}
Parser(html,options).then(function(e){
  console.log(e)
})

```
``` json
{ 
  "nodes": [{ 
    "name": "div", 
    "attrs": {
      "class": "demo",
      "style": "margin:5px;text-align:center"
    }, 
    "children": [{ 
      "text": "Hello World!", 
      "type": "text" 
    }] 
  }],
  "imgList": [] 
}
```
3. 在`img`标签的`style`中添加`max-width:100%;`，实现宽度自适应
4. 将`section`标签用`div`取代
5. 将`font`标签用`span`取代，并将`face`, `color`属性解析到`style`中
6. 将`a`标签的`style`中添加`color:#366092;`
6. 对于该节点下含有`a`（`selectable`为`true`且没有设置`ignore`属性时）, `img`（`preview`为`true`且没有设置`ignore`属性时）, `video`标签的，`continue`的值会被设置为`true`（用于前端显示）
7. 解析完成将返回一个形如`{ nodes:[Array], imgList:[Array] }`结构体,其中`nodes`数组可以直接应用于`rich-text`组件，整个结构体可以直接作为`Parser`组件的参数

## 原理简介 ##
&emsp;&emsp;该插件结合了`WxParse`中模板循环的方式和`rich-text`组件，对于节点下有`img`, `video`, `a`标签的，使用模板循环的方式显示，否则直接通过`rich-text`组件显示，这样既解决了`WxParse`中过多的标签数（`rich-text`可以节省大量的标签），层数容易不够（对于大于20层的直接用`rich-text`解析，理论上可以显示无限层级），无法解析表格，一些组件显示格式不正确（`rich-text`可以解析出更好的效果）等缺点；也弥补了`rich-text`图片无法预览，无法显示视频，无法复制链接，部分标签不支持（在解析过程中进行替换）等缺点，另外该解析脚本还减小了包的大小，提高了解析效率，通过包装成一个自定义组件，简单易用且功能强大。
## 链接 ##
[微信社区](https://developers.weixin.qq.com/community/develop/article/doc/00002c34fa8a60c86568279fe59413)  
## 更新日志 ##
- 2019.4.21：
  1. `U` 降低了最低基础库的要求  
  2. `A` 增加了`tagStyle`属性，支持对标签设置自定义样式
  3. `A` 发布了`demo`小程序
  4. `F` 修复了已知`bug`
- 2019.4.18：  
  1. `U` 优化`a`，`code`，`blockquote`等标签显示效果
  2. `A` 增加支持`audio`标签
  3. `A` 增加支持图片懒加载（`lazyload`属性）
  4. `F` 修复了已知`bug`
- 2019.4.16：
  1. `U` 减小了插件包的大小
  2. `F` 修复已知`bug`
- 2019.4.14：
  1. `U` `style`标签中的样式支持按标签名匹配，如`body{ Object }`
