// pages/booking/booking.js
Page({
  data:{
    times: ['08:00--12:00','14:00--18:00'],
    floor:['1F', '2F', '3F'],
    index: 0,
    first: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindPickerTime: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerOrder: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      first: e.detail.value
    })
  }
})