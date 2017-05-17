/**
 * Param: 
 * 1. 用户参数：所在地点，已绑定健身房，打卡记录
 * 5. 健身房参数：涵盖训练类型，训练子目录
 * 3. 全局变量向下扩展，下不能影响上，类似于Store
 */
var app = getApp();
var globalUser = app.globalData.user;
var globalGym = app.globalData.gym;
Page({
  data: {
    user: {},
    list: []
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 全局变量替换临时变量
    console.log("hello")
    var that = this
    that.setData({
      user : {
        name: globalUser.name,
        hdimg: globalUser.hdimg,
      },
      gym : {
        name: globalGym.name,
        binded: globalGym.binded
      },
      list: [{
        id: 'personal',
        name: '个性训练',
        open: false,
        scount: 5,
        rcount: 233,
        schedules: ['还没有你的专属计划']
      }, {
        id: 'chest',
        name: '胸',
        open: false,
        scount: 5,
        rcount: 233,
        schedules: ['周一国际练胸日']
      }, {
        id: 'back',
        name: '背',
        open: false,
        scount: 5,
        rcount: 233,
        schedules: ['背靠背超级组']
      }, {
        id: 'shoulder',
        name: '肩',
        open: false,
        scount: 5,
        rcount: 233,
        schedules: ['双人肩部安全组训练']
      }, {
        id: 'hip',
        name: '臀',
        open: false,
        scount: 5,
        rcount: 233,
        schedules: ['30min迷人翘臀速成计划']
      }, {
        id: 'leg',
        name: '腿',
        scount: 5,
        rcount: 233,
        schedules: ['腿部力量初级训练计划']
      }, {
        id: 'abs',
        name: '腹',
        scount: 5,
        rcount: 233,
        schedules: ['腹肌撕裂者强化版']
      }, {
        id: 'arm',
        name: '臂',
        scount: 5,
        rcount: 233,
        schedules: ['手臂成长突破训练']
      }]
    })
  },
  onShow: function(){
    // 判断是否是健身房页面回来
    var that = this
    var localGym = this.data.gym
    if(localGym.name != globalGym.name){
      wx.showLoading({
        title: '更新计划...',
        mask: true,
        success: function(res){
          console.log("success")
        },
        complete: function(){
          // wx.hideLoading();
          that.setData({
            gym: globalGym
          })
        }
      })
    }
  }
})

