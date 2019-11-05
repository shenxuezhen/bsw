// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPage: '',
    tabData: {
      items: [{
          name: '创建帖子',
          value: 'post'
        },
        {
          name: '创建任务',
          value: 'task',
          checked: 'true'
        },
      ],
      selectTab: '',
      selectTabName: '',
      dialogShow: false,
      showOneButtonDialog: false,
      buttons: [{
        text: '取消'
      }, {
        text: '确定'
      }],
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  radioChange: function(e) {
    this.setData({
      'tabData.selectTab': e.detail.value,
      'tabData.selectTabName': e.currentTarget.dataset.title
    })
  },
  openConfirm: function() {
    console.log(1)
    this.setData({
      'tabData.dialogShow': true
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})