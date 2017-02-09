// pages/notice/notice.js
var app = getApp();
Page({
  data:{
    notice:[{
      image: '../../images/notice-1.png',
      title: '2016第三季度报告',
      desc: '1.1本公司董事会、监事会及董事、监事、高级管理人员保证本报告所载资料不存在任何虚假记载、误导性陈述或者重大遗漏...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    },{
      image: '../../images/notice-3.png',
      title: '2016中国房企百亿军团出炉!恒大(03333)击败万科(02202)登顶榜首',
      desc: '中国指数研究院发布2016年中国房地产销售额百亿企业榜单，全国共有131家房地产企业跻身百亿军团,其中恒大、万科...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    },{
      image: '../../images/notice-2.png',
      title: '万科首次上榜《财富》世界500强 名列第356位',
      desc: '2016年7月20日，《财富》“世界500强”企业排行榜出炉，万科企业股份有限公司凭借2015年年度1843.18亿元的营收...'
    }],
    page: 1,
    size: 10,
    hasMore:true
  },
  loadMore:function(e) {
    // console.log(e)
    //   if(!this.data.hasMore) return
    //   this.setData({

    //   })
  },
  scroll:function(e){
    // console.log(e);
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
  getScanning: function () {
    app.getScanning()
  }
})
