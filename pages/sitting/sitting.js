// pages/booking/booking.js
Page({
  data:{
    flag: true,
    floor: true,
    items:['1F', '2F', '3F']
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '预定详细'
    })
    this.setData({
      comboText: '08:00--12:00',
      floorText:this.data.items[0]
    })
  },
  comboBox:function(){
    this.judge('flag');
  },
  floor:function(){
    this.judge('floor');
  },
  judge:function(type){
    if(type === 'flag'){
       this.setData({
        flag:!this.data.flag
      })
    }else{
      this.setData({
        floor:!this.data.floor
      })
    }
  },
  comboBox1:function(e){
    var text = e.currentTarget.dataset.text;
    this.setData({
      comboText:text,
      flag:true
    })
  },
  comboBox2:function(e){
    var text = e.currentTarget.dataset.text;
    this.setData({
      comboText:text,
      flag:true
    })
  },
  floorBox:function(e){
    var text = e.currentTarget.dataset.text;
    this.setData({
      floorText:text,
      floor:true
    })
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
  }
})