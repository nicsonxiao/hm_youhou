// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
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
    //导航栏点击事件
    handleItemTap(e){
      //1.获取点击的索引
      const {index}=e.currentTarget.dataset
      //2.触发父组件事件(子传父)
      this.triggerEvent("tabsItemChange",{index})
    }
  }
})
