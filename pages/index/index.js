//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    banners:[],
    notice:[]
  },
  onLoad: function () {
    var that = this
    app.getRequest('https://hseschool.app360.cn/mingpian/wanke/home.json',function(res){
      that.setData({
        banners: res.data.banners,
        notice: res.data.notice
      })
    })
  },
  getScanning: function () {
    app.getScanning()
  }
})
