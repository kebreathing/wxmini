// page/component/action/schedule/schedule.js
/**
 * Param: 
 * 1. 用户参数：所在地点，已绑定健身房，打卡记录
 * 2. 健身房参数：涵盖训练类型，训练子目录
 */
var app = getApp()

Page({
  data: {
    schedule: {},
    list: []
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id-1, list = this.data.list;
    list[id].open = !list[id].open
    this.setData({
      list: list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("[Schedule Log:] " + options);
    this.data.schedule.title = options.title;
    wx.setNavigationBarTitle({
      title: options.title
    });

    // 获取相关数据
    var that = this;
    that.setData({
      schedule: {
        title: options.title,
        tips: "训练动作简介",
        hdimg: "../../resources/kind/logo.png"
      },
      list : [
        {
          id: '1',
          name: '肱二头肌热身',
          type: '热身',
          group: 6,
          times: 6,
          rest: 30,
          open: true,
          action: {
            name: "肱二头肌训练",
            tips: "训练提示：运动侧重的不是重量而是适度。",
            gif: "../../resources/action/arm_1.gif",
          }
        }, {
          id: '2',
          name: '杠铃窄握卧推',
          type: '正常',
          group: 6,
          times: 6,
          rest: 30,
          open: true,
          action: {
            name: "肱二头肌训练",
            tips: "训练提示：运动侧重的不是重量而是适度。",
            gif: "../../resources/action/arm_2.gif",
          }
        }, {
          id: '3',
          name: '仰卧臂屈伸',
          type: '正常',
          group: 6,
          times: 6,
          rest: 30,
          open: true,
          action: {
            name: "肱二头肌训练",
            tips: "训练提示：运动侧重的不是重量而是适度。",
            gif: "../../resources/action/arm_3.gif",
          }
        }, {
          id: '4',
          name: '双杠臂屈伸',
          type: '正常',
          group: 6,
          times: 6,
          rest: 30,
          open: true,
          action: {
            name: "肱二头肌训练",
            tips: "训练提示：运动侧重的不是重量而是适度。",
            gif: "../../resources/action/arm_4.gif",
          }
        }, {
          id: '5',
          name: '颈后臂屈伸',
          type: '拉伸',
          group: 6,
          times: 6,
          rest: 30,
          open: true,
          action: {
            name: "肱二头肌训练",
            tips: "训练提示：运动侧重的不是重量而是适度。",
            gif: "../../resources/action/arm_5.gif",
          }
        }
      ]
    })
  } // End
})