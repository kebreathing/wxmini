// gym.js
var app = getApp();
var globalUser = app.globalData.user;
var globalGym = app.globalData.gym;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    binded: globalGym.binded,
    gym: globalGym.name,
    searchText: "",
    list:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: [
        {
          id: 0,
          name: "交大3.0健身房",
          address: "北京交通大学体育馆观影台下",
          selected: false
        },
        {
          id: 1,
          name: "交大3.0健身房",
          address: "北京交通大学体育馆观影台下",
          selected: false
        },
        {
          id: 2,
          name: "交大3.0健身房",
          address: "北京交通大学体育馆观影台下",
          selected: false
        }
      ]
    })
  },
  onShow: function(){
    
  },
  /**
   * 用户点击搜索按钮
   */
  onClickSearchBtn: function(){
    if(this.data.searchText.length == 0){
      return;
    } 

    console.log('[SearchBar]: ' + this.data.searchText)
    this.setData({
      searchText: '',
      list: [{
          id: 0,
          name: "交大3.0健身房",
          address: "北京交通大学体育馆观影台下",
          selected: false
      }]
    })
  },
  /**
   * 记录用户输入的搜索字符串
   */
  onTextChangeEvent: function(e){
    this.data.searchText = e.detail.value;
  },
  /**
   * 用户选择健身房
   */
  onSelectListItem: function(e){
    var id = e.currentTarget.id, list = this.data.list;
    var item = list[id];
    var tips = "";
    var title = "";
    var that = this;

    if(this.data.binded){
      title = '更换健身房';
      tips = '是否更换为绑定: ' + item.name + ' ？';
    } else {
      title ='绑定健身房';
      tips = '是否绑定: ' + item.name + ' ？';
    }

    wx.showModal({
      title: title,
      content: tips,
      success: function (res) {
        // 用户点击取消
        if(res.cancel){
          console.log("[bind] cancel")
          return;
        }

        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500,
          mask: true,
          success: function (res) {
            for (var i = 0, l = list.length; i < l; i++) {
              if (id == i) {
                list[i].selected = true
              } else {
                list[i].selected = false
              }
            }

            that.setData({
              list: list,
              binded: true,
              gym: list[id].name
            })

            globalGym.binded = true
            globalGym.name = list[id].name
          }
        }); // 提示消失
      }
    })
  }
})