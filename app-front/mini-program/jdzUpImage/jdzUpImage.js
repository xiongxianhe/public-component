const common = require("../../common/common")

// component/jdzUpImage/jdzUpImage.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindUploadImg(e) {
      common.openUserAuthSetting()
      common.upLoadImgQiNiu(url => {
        console.log(url)
        this.setData({url: url})
        this.triggerEvent('upload', {url})
      })
    },
    bindDelImg(e) {
      this.setData({url: ''})
      this.triggerEvent('del', '')
    },
  
  }
})