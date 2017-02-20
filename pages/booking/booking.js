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
    userChosen: '',
    userId: '',
    userTitle: '',
    userText: ''
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
    if(!chosen){
      var seats = this.data.regionDataSeat;
      this.setData({
        userChosen: res.currentTarget.dataset.mark,
        regionDataSeat: seats,
        userId: res.currentTarget.dataset.userid,
        userTitle: res.currentTarget.dataset.title,
        userText: res.currentTarget.dataset.usertext
      });
    };
  },
  chooseRoom:function(res){
    var chosen = res.currentTarget.dataset.chosen;
    if(!chosen){
      this.setData({
        userChosen: res.currentTarget.dataset.mark,
        regionDataRoom: this.data.regionDataRoom,
        userText: res.currentTarget.dataset.usertext,
        userId: res.currentTarget.dataset.mark
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
  generateMixed: function(n){
    // 随机数
    var res = "";
    var chars = ['0','1','2','3','4','5','6','7','8','9'];
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*9);
        res += chars[id];
    }
    return res;
  },
  submitBtn: function(e){
    let title,data,
        type = this.data.region,
        obtain = wx.getStorageSync(type) /*获取保存的预定数据*/,
        mixed = this.generateMixed(6)+this.data.userId /*获取随机数+预定userId*/;

    if(this.data.userChosen == ''){
      type == 'seat' ? title = '请选择座位' : title = '请选择会议室';
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

    obtain == '' ? obtain = {} : obtain;

    type == 'seat' ? obtain[mixed] = {
      date: this.data.date,
      daytime: this.data.daytime[this.data.first],
      seatNum: this.data.userTitle,
      userText: this.data.userText,
      floorNum: this.data.floor[this.data.num],
      first: this.data.num
    } : obtain[mixed] = {
      date: this.data.date,
      daytime: this.data.daytime[this.data.first],
      roomNum: this.data.userText,
      floorNum: this.data.floor[this.data.num],
      first: this.data.num
    };

    app.setStorageUser({key: this.data.region,data: obtain}, function (res){
      if(res.errMsg == 'setStorage:ok'){
        setTimeout(function(){
          wx.hideToast();
          wx.navigateTo({
            url: '../booking-detail/booking-detail?type='+type+'&userId='+mixed
          });
        },2000);
      }
    });
  },
  getScanning: function () {
    app.getScanning()
  },
})