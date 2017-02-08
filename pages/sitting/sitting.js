// pages/booking/booking.js
var userInfo = wx.getStorageSync('userInfo');
Page({
  data:{
    userName: '',
    userPhone: '',
    login: false,
    times: ['08:00--12:00','14:00--18:00'],
    floor:['1F', '2F', '3F'],
    index: 0,
    first: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 读取用户信息
    if(userInfo.length !== 0){
      this.setData({
        login: true,
        userName:userInfo.userName,
        userPhone:userInfo.userPhone
      })
    }
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
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerOrder: function(e) {
    this.setData({
      first: e.detail.value
    })
  },
  button:function(){
    // 读取用户信息
    console.log(userInfo)

  }
})