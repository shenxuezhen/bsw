// pages/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskShow:false,//任务详情
    postShow:false,//帖子详情
    createTip:false,//创建提示
    createType:'post',//创建类型
    beginCreate:true,//是否开始创建
  },
  // radio绑定事件
  radioChange:function(e){
    this.setData({
      createType: e.detail.value
    })
  },
  //取消事件
  default:function(e){
    console.log(111);
    wx.reLaunch({url: "/pages/index/index"})
  },
  //确定弹窗事件
  primary:function(e){
    this.setData({
      beginCreate:true,
      createTip:false
    })
  },
  // 创建任务
  primaryPsot:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var That=this;
    if (options && options.type == "task"){
      That.setData({
        taskShow:true
      })
    } else if (options && options.type == "post"){
      That.setData({
        postShow: true
      })
    } else if (options==''){
      That.setData({
        createTip: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})