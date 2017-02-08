// pages/personal/personal.js
var userInfo = wx.getStorageSync('userInfo');
Page({
  data:{
    userName: '',
    userPhone: '',
    userHead: '../../images/unuserhead.jpg',
    operation:'登录',
    login: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 读取用户信息
    if(userInfo.length !== 0){
      this.setData({
        operation: '退出',
        login: true,
        userName:userInfo.userName,
        userPhone:userInfo.userPhone,
        userHead: '../../images/userhead.jpg'
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
  defaultLogin:function(e){
    var login = e.currentTarget.dataset.login;
    if(login == true){
      // 点击退出
      wx.showToast({
        title: '退出中',
        icon: 'loading'
      })
      setTimeout(function(){
        wx.hideToast();
        wx.removeStorageSync('userInfo');
        wx.switchTab({
          url: '../index/index'
        })
      },2000);
    }else{
      // 点击登录
      wx.navigateTo({
        url: '../login/login'
      })
    }
  },
  listFirst:function(){
    // 我的预订
    wx.switchTab({
      url: '../orders/orders'
    })
  }
})