// pages/personal/personal.js
var app = getApp();
Page({
  data:{},
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
  defaultLogin:function(){
    // 点击跳转登录
    wx.navigateTo({
      url: '../login/login'
    })
  },
  listFirst:function(){
    // 我的预订
    wx.switchTab({
      url: '../orders/orders'
    })    
  }
})