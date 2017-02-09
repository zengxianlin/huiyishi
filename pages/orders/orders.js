// pages/orders/orders.js
Page({
  data:{
    Left:'5%',
    hidden: false,
    prompt: true,
    ordersTitle: '暂无预定座位',
    room:[{
      date:'2017-02-07 10:00-12:00',
      floor:'4F',
      roomNo:'4022',
      complate:true
    },{
      date:'2017-02-07 14:00-16:00',
      floor:'1F',
      roomNo:'1011',
      complate:true
    },{
      date:'2017-02-05 14:00-16:00',
      floor:'17F',
      roomNo:'1736',
      complate:false
    }],
    seat:[{
      date:'2017-02-04 10:00-12:00',
      floor:'1F',
      roomNo:'B',
      seatNo:'A1',
      complate:true
    },{
      date:'2017-02-07 09:30-10:45',
      floor:'5F',
      roomNo:'A',
      seatNo:'B1',
      complate:true
    },{
      date:'2017-02-08 14:00-16:00',
      floor:'1F',
      roomNo:'A',
      seatNo:'A11',
      complate:false
    },{
      date:'2017-02-09 10:00-11:30',
      floor:'3F',
      roomNo:'F',
      seatNo:'A13',
      complate:false
    }]

  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
      this.setData({
          ordersRoom:true,
          ordersSeat:false,
          colLeft:'#b02923',
          borLeft:'3px solid #b02923'
      });
  },
  onShow: function(){
      const userInfo = wx.getStorageSync('userInfo');
      console.log(userInfo)
      if(userInfo.length === 0){
        this.setData({
            hidden: true,
            prompt: false
        })
      }else{
        this.setData({
            hidden: false,
            prompt: true
        })
      }
  },
  tabLeft:function(){
    // 点击座位
      this.setData({
          ordersRoom:true,
          ordersSeat:false,
          colLeft:'#b02923',
          colRight:'',
          borRight:'',
          Left:'5%',
          ordersTitle: '暂无预定座位'
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
          Left:'55%',
          ordersTitle: '暂无预定会议室'
      });
  }
})