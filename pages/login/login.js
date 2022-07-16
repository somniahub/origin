// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo:{},
      hasUserInfo: false
    },
    //登录
    handleGetUserInfo(e) {
        const { userInfo } = e.detail;

        wx.getUserProfile({
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            });
            wx.setStorageSync('userInfo', userInfo);
           //跳转回去
            wx.navigateBack({
              delta: 1
            });
          }
        })
    }
})