// pages/usage/usage.js
Page({
  data: {
    html: "{{html}}",
    tagStyle: {
      code: "font-style: italic; color: #005cc5;margin-left:3px;margin-right:3px;"
    },
    attrs: [{
      name: 'html',
      type: 'String\nArray\nObject',
      notice: '见下方说明'
    }, {
      name: 'space',
      type: 'String',
      default: 'nbsp',
      notice: '连续空格格式'
    }, {
      name: 'selectable',
      type: 'Boolean',
      default: 'true',
      notice: '是否允许链接点击'
    }, {
      name: 'preview',
      type: 'Boolean',
      default: 'true',
      notice: '是否允许图片预览'
    }, {
      name: 'lazyload',
      type: 'Boolean',
      default: 'false',
      notice: '是否开启图片懒加载'
    }, {
      name: 'tagStyle',
      type: 'Object',
      notice: '自定义组件样式'
    }],
    versions: [{
      version: ">=2.4.1",
      function: "完全正常",
      percent: "96.22%"
    }, {
      version: "1.6.6-2.4.0",
      function: "不能显示连续空格",
      percent: "3.67%"
    }, {
      version: "<1.6.6",
      function: "无法使用",
      percent: "0.09%"
    }]
  }
})