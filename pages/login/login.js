// pages/login/login.js
const app = getApp();
Page({
  data:{
    userName: false,
    userPassword: false
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
  confirm: function () {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    })
  },
  login:function(params){
    wx.showToast({
      title: '登录中',
      icon: 'loading'
    })
    app.setStorageUser(params, function (res){
      if(res.errMsg == 'setStorage:ok'){
          setTimeout(function(){
            wx.hideToast();
            // 登录
            wx.switchTab({
              url:'../index/index'
            });
          },2000);
        }
    });
  },
  formSubmit: function(e) {
    let that = this;
    let userName = e.detail.value.userName;
    let userPassword = e.detail.value.userPassword;
    if(userName == '' ){
        this.setData({
          userName: true,
        })
        return false;
    }else{
        this.setData({
          userName: false,
        })
    }
    if(userPassword == ''){
        this.setData({
          userPassword: true,
        })
        return false;
    }else{
        this.setData({
          userPassword: false,
        })
    }

    if(userName !== 'vanke' && userPassword !== '123456'){
      wx.showModal({
        title: '登录失败',
        content: '账号或密码不正确',
        confirmColor: '#b02923',
        showCancel: false
      })
      return false;
    }
    let params = {
      'userName': userName,
      'userPhone': 13011111111
    }
    that.login(params);
  }
})