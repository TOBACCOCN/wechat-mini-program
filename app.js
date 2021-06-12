//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('%c ✨どうぞよろしくお愿いいたします~✨ 哈哈','color:#42b983')
    console.log(text);
    // 不会触发 onPageNotFound
    // wx.navigateTo({
    //   url:"/pages/notfound/notfound"
    // });
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  onShow() {
    console.log("onShow");
  },
  onHide() {
    console.log("onHide");
  },
  onError(err){
    console.log("onError");
    console.log(err);
  },
  // 应用第一次启动时找不到入口界面，会触发该方法，可以在编译模式中添加自定义模式，启动不存在页面，以查看效果
  onPageNotFound() {
    wx.navigateTo({
      url: '/pages/button/button',
    })
  }
})