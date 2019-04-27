//index.js
Page({
  seedemo(){
    wx.showActionSheet({
      itemList: ['功能示例','整体示例'],
      success(res){
        wx.navigateTo({
          url: '../demo/demo?index=' + res.tapIndex,
        })
      }
    })
  },
  onShareAppMessage(res) {
    return {
      title: '富文本插件',
      imageUrl: '../../images/share.png',
      path: '/pages/index/index'
    }
  }
})