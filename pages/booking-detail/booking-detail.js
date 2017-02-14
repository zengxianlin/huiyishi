// pages/booking-detail/booking-detail.js
Page({
  data:{
    region: 'seat',
    chosens: false,
    regionTitle:"只能单选当天座位",
    regionDateSeat:[{
      type:"seat",
      title:"A区",
      regionlist:[{
            chosen: true,
            text: "01"
          },{
            chosen: false,
            text: "02"
          },{
            chosen: false,
            text: "03"
          },{
            chosen: false,
            text: "04"
          },{
            chosen: true,
            text: "05"
          },{
            chosen: true,
            text: "06"
          },{
            chosen: false,
            text: "07"
          },{
            chosen: true,
            text: "08"
          },{
            chosen: false,
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
            text: "会议室A"
          },{
            chosen: false,
            text: "会议室B"
          },{
            chosen: false,
            text: "会议室C"
          },{
            text: "会议室D"
          },{
            chosen: true,
            text: "会议室E"
          },{
            text: "会议室G"
          },{
            text: "会议室H"
          },{
            text: "会议室I"
          }
      ]
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      region: options.type
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
    console.log(this.data.regionModule)

  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
    this.setData({
      regionModule: ''
    })
  },
  chooseBtn:function(res){
    // if(){

    // }
    console.log(res)

  }
})