// components/Tabs.js
Component({

  properties: {
    // 接收父组件的属性
    tabs:{
      type: Array,
      value: []
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  methods: {
    handleItemTap(e) {
      // console.log(e);
      // const {index} = e.currentTarget.dataset;
      // // 最严谨写法是 
      // // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // let {tabs} = this.data;
      // tabs.forEach((v,i) => i === index ? v.isActive = true : v.isActive = false);
      // this.setData({tabs});
      const {index} = e.currentTarget.dataset;
      // 触发父组件 itemChanged 方法
      this.triggerEvent("itemChanged", {index});
    }
  }
})