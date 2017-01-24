//app.js
App({
  onLaunch: function () {
    
  },
  getRequest: function(url,callback){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      success: function(res) {
        if(callback && typeof callback == 'function'){
          callback(res)
          wx.hideToast()
        }
      }
    })
  }
})