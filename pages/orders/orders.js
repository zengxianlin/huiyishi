// pages/orders/orders.js
const app = getApp();
Page({
  data:{
    Left:'5%',
    hidden: false,
    prompt: true,
    ordersCut: true,
    region: 'seat',
    orderlist: '',
    ordersTitle: '暂无预定座位'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.dateResults(options);
  },
  onShow: function(){
    this.tabLeft();
  },
  onHide:function(){
    // 页面隐藏
  },
  tabLeft:function(){
    // 点击座位
    this.setData({
      region: 'seat',
      ordersRoom:true,
      ordersSeat:false,
      ordersCut: true,
      colRight:'',
      borRight:'',
      Left:'5%',
      ordersTitle: '暂无预定座位'
    });
    this.dateResults();
  },
  tabRight:function(){
    // 点击会议室
    this.setData({
      region: 'room',
      ordersRoom:false,
      ordersSeat:true,
      ordersCut: false,
      colLeft:'',
      borLeft:'',
      Left:'55%',
      ordersTitle: '暂无预定会议室'
    });
    this.dateResults();
  },
  dateResults:function(options){
    if(wx.getStorageSync('userInfo') == ''){
      this.setData({
        orderlist: '',
        prompt: true
      });
      return false
    } ;
    var type;
    options == undefined || options.type == undefined ? type = this.data.region : type = options.type;
    const obtain = wx.getStorageSync(type);
    if(obtain == ''){
      this.setData({
        prompt: true,
        orderlist: ''
      });
    }else{
      this.setData({
        orderlist: obtain
      });
    }
  },
  ordersCancel:function(res){
    //  取消订单
    var _that = this;
    var userId = res.currentTarget.dataset.userid;
    var type = res.currentTarget.dataset.region;
    wx.showModal({
      title: '提示',
      content: '确定取消预定订单？',
      confirmColor: '#b02923',
      success: function(res) {
        if (res.confirm) {
          var removeID = wx.getStorageSync(type);
          delete removeID[userId];
          app.setStorageUser({key: _that.data.region,data: removeID}, function (res){
            if(res.errMsg == 'setStorage:ok'){
              wx.showToast({
                  title: '取消订单',
                  icon: 'loading',
                  duration: 10000
              });
              setTimeout(function(){
                wx.hideToast();
                wx.navigateTo({
                  url: '../orders/orders'
                });
                _that.dateResults();
              },1000);
            }
          });
        }
      }
    })


  }
})