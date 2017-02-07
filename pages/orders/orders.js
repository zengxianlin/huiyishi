// pages/orders/orders.js
Page({
  data:{
    room:[{
      louc:'1F',
      menp:'1022',
      zuow:'35',
      wanc:true
    },{
      louc:'6F',
      menp:'602',
      zuow:'01',
      wanc:true      
    },{
      louc:'11F',
      menp:'1111',
      zuow:'11',
      wanc:false      
    }],
    seat:[{
      huiy:'10:00',
      louc:'4F',
      huimh:'XXA-XV',
      wanc:true 
    },{
      huiy:'22:00',
      louc:'9F',
      huimh:'SSS-XV',
      wanc:true 
    },{
      huiy:'10:00',
      louc:'4F',
      huimh:'XXA-XV',
      wanc:true 
    },{
      huiy:'14:00',
      louc:'3F',
      huimh:'XXOO-XV',
      wanc:false 
    }]

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      this.setData({
          ordersRoom:true,
          ordersSeat:false,
          colLeft:'#b02923',
          borLeft:'3px solid #b02923'
      })    
  },
  tabLeft:function(){
    // 点击座位
      this.setData({
          ordersRoom:true,
          ordersSeat:false,
          colLeft:'#b02923',
          borLeft:'3px solid #b02923',
          colRight:'',
          borRight:''
      });
      
  },
  tabRight:function(){
    // 点击会议室
      this.setData({
          ordersRoom:false,
          ordersSeat:true,
          colLeft:'',
          borLeft:'',
          colRight:'#b02923',
          borRight:'3px solid #b02923'
      });  
  },
  erweima:function(){
    wx.scanCode({
  success: (res) => {
    console.log(res)
  }
})
      // this.setData({
      //   console.log('11');
      // })
      
  }
})