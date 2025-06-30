// component/jdzinput/jdzInput.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: '标签'
    },
    tag: {
      type: String,
      value: '/resource/images/app/main/delete.png'
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
    bindInput(e) {
      const value = e.detail.value
      this.triggerEvent('input', {value})
    }
  }
})