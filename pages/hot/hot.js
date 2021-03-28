// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello miniprograme",
    num:100,
    show:true,
    person:{name:'bruce', age: 18},
    list:['唐僧', '孙悟空', '猪八戒', '沙和尚'],
    persons:[{name: '唐僧', apge: 28}, {name: '孙悟空', apge: 500}, {name: '猪八戒', apge: 300}, {name: '沙和尚', apge: 200}]
  },

  handleInput:function(e) {
    console.log(e)
    this.setData({num:e.detail.value})
  },
  handleTap:function(e) {
    console.log(e)
    this.setData({num: this.data.num + e.currentTarget.dataset.opration})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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