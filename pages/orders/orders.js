// pages/orders/orders.js
Page({
  data:{
    room:[{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'1022',
      complate:true
    },{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'1022',
      complate:true     
    },{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'1022',
      complate:true      
    }],
    seat:[{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'A',
      seatNo:'A1',
      complate:true 
    },{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'A',
      seatNo:'A1',
      complate:true 
    },{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'A',
      seatNo:'A1',
      complate:true 
    },{
      date:'10:00-12:00',
      floor:'1F',
      roomNo:'A',
      seatNo:'A1',
      complate:true 
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
  }
})