//index.js
//获取应用实例
const app = getApp()
const speedDatas=require('../data/index.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swipers: {
      background: ['', '', '',''],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
      indicatorColor:'blue'
    },
    speedData:[],
    complatedData:[],
    hotData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that=this;
    
    wx.login({
      success(res){
        console.log(res);
      }
    })
    wx.request({
      url: 'https://baishiwu.top/index',
      method: "GET",
      success: function (res) {
        that.setData({
          speedData: res.data.urgency,
          complatedData: res.data.finished,
          hotData: res.data.invitation 
        })
      }
    })
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      
    } else if (that.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  swiperChange: function () {
  },
  jumpDetail(e) {
    var type = e.currentTarget.dataset.type;
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `../editInfo/editInfo?id=${id}&type=${type}`})
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
