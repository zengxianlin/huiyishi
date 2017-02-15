// pages/booking/booking.js
const app = getApp();
const util = require('../../utils/util.js');
const dataRoom = {
	room:[{
		id:"10001",
		title:"会议室A",
		chosen:true,
	},{
		id:"10002",
		title:"会议室B",
		chosen:false,
	},{
		id:"10003",
		title:"会议室C",
		chosen:false,
	},{
		id:"10004",
		title:"会议室D",
		chosen:true,
	},{
		id:"10005",
		title:"会议室E",
		chosen:false,
	},{
		id:"10006",
		title:"会议室F",
		chosen:false,
	}]
};
const dataSeat = {
	seat:[{
		id:"10001",
		title:"A区",
		children:[{
			id:"20001",
			title:"01",
			chosen:true,
		},{
			id:"20002",
			title:"02",
			chosen:false,
		},{
			id:"20003",
			title:"03",
			chosen:true,
		},{
			id:"20004",
			title:"04",
			chosen:true,
		}]
	},{
		id:"10002",
		title:"B区",
		children:[{
			id:"20001",
			title:"01",
			chosen:true,
		},{
			id:"20002",
			title:"02",
			chosen:false,
		},{
			id:"20003",
			title:"03",
			chosen:false,
		},{
			id:"20004",
			title:"04",
			chosen:true,
		},{
			id:"20005",
			title:"05",
			chosen:true,
		}]
	}]
}
Page({
  data:{
    region: 'seat',
    chosens: false,
    options: false,
    daytime:['上午', '下午'],
    floor:['1F', '2F', '3F'],
    first: 0,
    num: 0,
    regionDataSeat:[],
    regionDataRoom:[],
    userChosen: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      region: options.type,
      date:util.formatTime(new Date)
    });
    if(options.type == 'seat'){
      var seats = dataSeat
      seats['userChosen'] = ''
      this.setData({
        regionDataSeat: seats
      });
    }else{
      var rooms = dataRoom
      rooms['userChosen'] = ''
      this.setData({
        regionDataRoom: rooms
      });
    };
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
  chooseSeat:function(res){
    var chosen = res.currentTarget.dataset.chosen;
    var mark = res.currentTarget.dataset.mark;
    if(!chosen){
      var seats = this.data.regionDataSeat;
      this.setData({
        userChosen: mark,
        regionDataSeat: seats
      });
    };
  },
  chooseRoom:function(res){
    var chosen = res.currentTarget.dataset.chosen;
    var mark = res.currentTarget.dataset.mark;
    if(!chosen){
      var rooms = this.data.regionDataRoom;
      this.setData({
        userChosen: mark,
        regionDataRoom: rooms
      });
    };
  },
  bindDateChange: function(e) {
    // 日期
    this.setData({
      date: e.detail.value
    });
  },
  bindPickerOrder: function(e) {
    // 时间
    this.setData({
      first: e.detail.value
    });
  },
  bindPickerFloor: function(e){
    // 楼层
    this.setData({
      num: e.detail.value
    });
  },
  submitBtn: function(e){
    let title,type = this.data.region
    if(this.data.userChosen == ''){
      if(type == 'seat'){
        title = '请选择座位';
      }else{
        title = '请选择会议室';
      };
      wx.showToast({
        title: title,
        icon: 'loading',
        duration: 1000
      });
      return false
    }else{
      wx.showToast({
        title: '提交预定',
        icon: 'loading',
        duration: 10000
      });
    };
    setTimeout(function(){
      wx.hideToast();
      wx.navigateTo({
        url: '../booking-detail/booking-detail?type='+type
      });
    },2000);
  },
  getScanning: function () {
    app.getScanning()
  },
})