// component/jdzDefNavHeader/jdzDefNavHeader.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    backImage: {
      type: String,
      value: '/resource/images/app/main/header-back.png'
    },
    headerTitle: {
      type: String,
      value: ''
    }
  },

  data: {
    statusBarHeight: 20,
    navHeight: 44,
    navWidth: 375,

    statusBarHeight: 44,
    navigationBarHeight: 44
  },

  lifetimes: {
    attached: function() {
      this.setNavSize()
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setNavSize: function () {
      var that = this
        , sysinfo = wx.getSystemInfoSync()
        , statusHeight = sysinfo.statusBarHeight
        , isiOS = sysinfo.system.indexOf('iOS') > -1
        , navHeight;
      if (!isiOS) {
        navHeight = 48;
      } else {
        navHeight = 44;
      }
      that.setData({
        status: statusHeight,
        navHeight: navHeight,
        navWidth: sysinfo.screenWidth - 87 - 7 - 5 - 10
      })
    },
  }
})