const html2nodes = require('./Parser.js')
var imgList = [];
Component({
  properties: {
    'html': {
      type: null,
      value: '',
      observer: function (html) {
        if(!html){
          this.setData({
            nodes:[]
          })
        }
        else if (typeof html == 'string') {
          var that = this;
          html2nodes(html, {
            tagStyle: this.data.tagStyle,
            preview: this.data.preview,
            selectable: this.data.selectable
          }).then(function (e) {
            that.triggerEvent('parse', e)
            imgList = e.imgList;
            that.setData({
              nodes: e.nodes
            })
          });
        } else if (html.constructor == Array) {
          imgList = [];
          this.setData({
            nodes: html
          })
        } else if (typeof html == 'object') {
          imgList = html.imgList;
          this.setData({
            nodes: html.nodes
          })
        }
      }
    },
    'tagStyle':{
      type:Object,
      value:{}
    },
    'space': {
      type: String,
      value: 'nbsp'
    },
    'selectable': {
      type: Boolean,
      value: true
    },
    'preview': {
      type: Boolean,
      value: true
    },
    'lazyload':{
      type: Boolean,
      value: false
    }
  },
  methods: {
    copyhref(e) {
      if (this.data.selectable) {
        wx.setClipboardData({
          data: e.currentTarget.dataset.href,
          success:function(res){
            wx.showToast({
              title: '链接已复制',
            })
          }
        })
      }
    },
    previewImg(e) {
      if (this.data.preview && !e.target.dataset.hasOwnProperty('ignore')) {
        wx.previewImage({
          current: e.target.dataset.src,
          urls: imgList.length ? imgList : [e.target.dataset.src],
        })
      }
    }
  }
})