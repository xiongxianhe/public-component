// component/jdzTab/jdzTab.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    menus: {
      type: Array,
      value: [
        {tabName: 'tab1', tabIndex: 0, tabTipsNum: 0},
        {tabName: 'tab2', tabIndex: 1, tabTipsNum: 0},
        {tabName: 'tab3', tabIndex: 2, tabTipsNum: 2},
        {tabName: 'tab4', tabIndex: 3, tabTipsNum: 0}
      ]
    },
    startIndex: {
      type: Number,
      default: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedItem: 0,
  },

  lifetimes: {
    ready() {
      this.setData({ selectedItem: this.properties.startIndex });
    },
  },
  observers: {
    'startIndex': function(newVal) {
      this.setData({ selectedItem: newVal });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSelectedItem(e) {
      const idx = e.currentTarget.dataset.idx - 0
      this.setData({selectedItem: e.currentTarget.dataset.idx})
      this.triggerEvent('selected', {value: idx})
    }
  }
})
