// pages/booking/booking.js
const app = getApp();
const util = require('../../utils/util.js');
Page({
  data:{
    region: 'seat',
    chosens: false,
    options: false,
    daytime:['上午', '下午'],
    floor:['1F', '2F', '3F'],
    first: 0,
    num: 0,
    regionTitle:"只能单选当天座位",
    regionDateSeat:[{
      type:"seat",
      title:"A区",
      regionlist:[{
            chosen: true,
            options: false,
            text: "01"
          },{
            chosen: false,
            options: true,
            text: "02"
          },{
            chosen: false,
            options: false,
            text: "03"
          },{
            chosen: false,
            options: false,
            text: "04"
          },{
            chosen: true,
            options: false,
            text: "05"
          },{
            chosen: true,
            options: false,
            text: "06"
          },{
            chosen: false,
            options: false,
            text: "07"
          },{
            chosen: true,
            options: false,
            text: "08"
          },{
            chosen: false,
            options: false,
            text: "09"
          }
      ]
    }],
    regionDateRoot:[{
      type:"root",
      title:"会议室",
      regionlist:[
          {
            chosen: true,
            options: false,
            text: "会议室A"
          },{
            chosen: false,
            options: false,
            text: "会议室B"
          },{
            chosen: false,
            options: false,
            text: "会议室C"
          },{
            chosen: false,
            options: false,
            text: "会议室D"
          },{
            chosen: true,
            options: false,
            text: "会议室E"
          },{
            chosen: true,
            options: false,
            text: "会议室G"
          },{
            chosen: false,
            options: false,
            text: "会议室H"
          },{
            chosen: true,
            options: true,
            text: "会议室I"
          }
      ]
    }],
    regionModule:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      region: options.type,
      date:util.formatTime(new Date)
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    if( this.data.region == 'seat'){
      this.setData({
        regionModule: this.data.regionDateSeat
      })
    }else{
      this.setData({
        regionModule: this.data.regionDateRoot
      })
    }
    // console.log(this.data.regionModule)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  chooseBtn:function(res){
    // 座位选择 / 会议室选择
    var chosen = res.currentTarget.dataset.chosen;
    var index = res.currentTarget.dataset.index;
    var optionst = this.data.regionModule[0].regionlist[index].options;
    console.log(this.data.regionModule)


    // if(optionst == false){
      // this.setData({
      //   regionModule: this.data.regionModule[0].regionlist[index].options
      // })
      // optionst = true
    // }else{
      // optionst = false
    // }
    console.log(optionst)

    // if(chosen == false){
    //   this.setData({
    //     regionModule: !optionst
    //   })
    //   console.log(options)
    // }
  },
  bindDateChange: function(e) {
    // 日期
    console.log(e);
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerOrder: function(e) {
    // 时间
    this.setData({
      first: e.detail.value
    })
  },
  bindPickerFloor: function(e){
    // 楼层
    this.setData({
      num: e.detail.value
    })
  },
  getScanning: function () {
    app.getScanning()
  },
})