// pages/booking/booking.js
Page({
  data:{
    times: ['08:00--12:00','14:00--18:00'],
    floor:['1F', '2F', '3F'],
    index: 0,
    first: 0,
    picker:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    if(options.id == undefined){
      this.setData({
        picker: false
      })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    // 读取用户信息
    var userInfo = wx.getStorageSync('userInfo');
    if(userInfo.length !== 0){
      this.setData({
        userName: userInfo.userName,
        userPhone: userInfo.userPhone,
        login: true,
        btnSubmit: '确认预定'
      })
    }else{
      this.setData({
        userName: '',
        userPhone: '',
        login: false,
        btnSubmit: '登录'
      })
    }
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
  btnSubmit:function(){
    if(this.data.login){
      console.log('预定成功')
    }else{
      wx.navigateTo({
        url: '../login/login'
      })
    }
  }
})