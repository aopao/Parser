//index.js
Page({
  onShareAppMessage(res) {
    return {
      title: '富文本插件',
      imageUrl: '../../images/share.png',
      path: '/pages/index/index'
    }
  }
})