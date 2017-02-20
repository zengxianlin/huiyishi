// pages/booking/booking.js
var util = require('../../utils/util.js');
Page({
  data:{
    times: ['08:00--12:00','14:00--18:00'],
    floor:['上午', '下午'],
    bookFloor:'6F',
    bookPlan:'A区15',
    bookArea:'A区',
    index: 0,
    first: 0,
    picker:true,
    type: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var obtain = wx.getStorageSync(options.type);
    if(options.userId == undefined){
      this.setData({
        picker: false,
        date:util.formatTime(new Date)
      })
    }else{
      if(obtain[options.userId]){
        this.setData({
          picker: true,
          type: options.type,
          bookFloor: obtain[options.userId].floorNum,
          date: obtain[options.userId].date,
          first: obtain[options.userId].first
        })
        if(options.type == 'seat'){
          this.setData({
            bookPlan: obtain[options.userId].seatNum+obtain[options.userId].userText,
            bookArea: obtain[options.userId].seatNum
          })
        }else{
          this.setData({
            bookPlan: obtain[options.userId].roomNum,
            bookArea: '会议室'
          })
        }
      }
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
   bindDateChange: function(e) {
    // 日期
    console.log(e);
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerOrder: function(e) {
    this.setData({
      first: e.detail.value
    })
  },
  btnSubmit:function(){
    var _that = this;
    if(this.data.login){
      wx.showToast({
        title: '预定成功',
        icon: 'success',
        duration: 1000,
        success:function(){
          setTimeout(function(){
            console.log('预定成功')
            wx.switchTab({
              url: '../orders/orders?type='+_that.data.type
            })
          },1000)
        }
      })
    }else{
      wx.navigateTo({
        url: '../login/login'
      })
    }
  }
})