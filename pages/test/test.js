// pages/test/test.js
var htmlString;
Page({
  onLoad() {
    htmlString = "";
  },
  inputHtml(e) {
    htmlString = e.detail.value;
  },
  addTemplate(e) {
    switch (e.target.dataset.type) {
      case 'table':
        htmlString += '<style>\ntable{\n  border-left:1px solid #dfe2e5;\n  border-top:1px solid #dfe2e5\n}\ntd{\n  text-align:ceter;\n  border-right:1px solid #dfe2e5;\n  border-bottom:1px solid #dfe2e5;\n  font-size:14px;\n  padding:5px;\n}\n</style>\n<table>\n  <tr>\n    <td>标题1</td>\n    <td>标题2</td>\n    <td>标题3</td>\n  </tr>\n  <tr>\n    <td rowspan=2>内容1</td>\n    <td>内容2</td>\n    <td>内容3</td>\n  </tr>\n  <tr>\n    <td>内容4</td>\n    <td>内容5</td>\n  </tr>\n</table>';
        break;
      case 'list':
        htmlString += '<ol>\n  <li>有序列表1</li>\n  <li>有序列表2</li>\n</ol>\n<ul>\n  <li>无序列表1</li>\n  <li>无序列表2</li>\n</ul>';
        break;
      case 'img':
        htmlString += '<div style="text-align:center;">\n  <img src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/13/b5f2a4b340b855488029635bb8649309.jpg" />\n<p style="color:gray;font-size:12px;text-align:center">点击图片预览</p>\n</br>\n  <img ignore src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/14/190f5994407ecad1805d8a3478e64821.gif" width="50%"/>\n  <p style="color:gray;font-size:12px">装饰图片不能预览</p>\n</div>';
        break;
      case 'video':
        htmlString += '<div style="text-align:center;">\n  <video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" controls="true"></video>\n</div>';
        break;
      case 'a':
        htmlString += '<div style="text-align:center">\n  <a href="../introduction/introduction">功能介绍</a>\n  </br>\n  <a href="https://github.com/jin-yufeng/Parser">https://github.com/jin-yufeng/Parser</a>\n  <p style="color:gray;font-size:12px">外部链接，长按可以复制</p>\n</div>'
    }
    this.setData({
      htmlString
    })
  },
  clearHtml() {
    htmlString = "";
    this.setData({
      html: ""
    })
  },
  parseHtml(e) {
    this.setData({
      html: e.detail.value.html,
    })
  },
})