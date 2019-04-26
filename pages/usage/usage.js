// pages/usage/usage.js
Page({
  data: {
    False: "{{false}}",
    html: "{{html}}",
    tagStyle: {
      code: "font-style: italic; color: #005cc5;margin-left:3px;margin-right:3px;"
    },
    attrs: [{
      name: 'html',
      type: 'String\nArray\nObject',
      notice: '见下方说明'
    }, {
      name: 'lazyload',
      type: 'Boolean',
      default: 'false',
      notice: '图片懒加载'
    }, {
      name: 'tagStyle',
      type: 'Object',
      notice: '自定义组件样式'
    }],
    versions: [{
      version: ">=2.2.5",
      function: "完全正常",
      percent: "98.17%"
    }, {
      version: "1.6.6-2.2.4",
      function: "部分html实体无法显示",
      percent: "1.71%"
    }, {
      version: "<1.6.6",
      function: "无法使用",
      percent: "0.09%"
    }],
    upgrade:
      `<ul>
    <li>2019.4.26:
      <ol>
        <li><code>A</code> 增加支持<code>pre</code>, <code>u</code>, <code>center</code>, <code>source</code>等标签</li>
        <li><code>A</code> 增加<code>bindlinkpress</code>回调函数，在链接受到点击时触发，开发者可以在此回调中进行进一步操作（如下载和打开文档等）</li>
        <li><code>A</code> 增加支持代码高亮显示</li>
        <li><code>U</code> 对于不在支持列表中的标签，除个别直接移除外，都会被转为<code>div</code>标签，因此可以使用一些语义化标签，如<code>article</code>, <code>address</code>等</li>
        <li><code>U</code> 精简包的大小至<code>28KB</code>，提高了解析效率和渲染效率（约10%）</li>
        <li><code>D</code> 删除了<code>preview</code>, <code>selectable</code>属性，默认允许图片预览和链接点击</li>
        <li><code>D</code> 删除了<code>space</code>属性，由于设置连续空格会使得标签间的空格都被显示，导致错误的效果，因此取消了这一属性；如需要显示连续空格，请使用实体编码的空格，如<code>&amp;ensp;</code>, <code>&amp;emsp;</code>等
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.21:
      <ol>
        <li><code>A</code> 增加了<code>tagStyle</code>属性，支持对标签设置自定义样式</li>
        <li><code>A</code> 发布了<code>demo</code>小程序</li>
        <li><code>U</code> 降低了最低基础库的要求</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.18:
      <ol>
        <li><code>A</code> 增加支持<audio>标签</li>
        <li><code>A</code> 增加<code>lazyload</code>属性（图片懒加载）</li>
        <li><code>U</code> 优化<code>a</code>, <code>code</code>, <code>blockquote</code>标签的显示效果</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.16:
      <ol>
        <li><code>U</code> 精简包的大小至<code>33KB</code></li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.14:
      <ol>
        <li><code>U</code> <code>style</code>标签中的样式支持按标签名匹配，如<code>body{Object}</code></li>
      </ol>
    </li>
  </ul>`
  },
})