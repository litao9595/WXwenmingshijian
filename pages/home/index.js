// pages/home/index.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 4000,
    duration: 500,
    menu:[
      {img:'../image/icon-zhiyuanshengqing.png',name:'志愿者申请',url:'../zhiyuanzheshengqing/index'},
      {img:'../image/icon-tuanduishengqing.png',name:'团队申请',url:'../tuanduishengqing/index'},
      {img:'../image/icon-gongyihuodong.png',name:'公益活动',url:''},
      {img:'../image/icon-kunnanqiuzhu.png',name:'困难求助',url:'../kunnanqiuzhu/index'},
      {img:'../image/icon-baixingdiandan.png',name:'百姓点单',url:'../baixingdiandan/index'},
      {img:'../image/icon-weixinyuan.png',name:'微心愿',url:'../weixingyuan/index'},
      {img:'../image/icon-zhiyuanhuodong.png',name:'志愿活动',url:'../zhiyuanhuodong/index'},
      {img:'../image/icon-tuanduifengcai.png',name:'团队风采',url:'../tuanduifengcai/index'},
      {img:'../image/icon-shijianzhengdi.png',name:'实践阵地',url:'../shijianzhengdi/index'},
      {img:'../image/icon-wode.png',name:'我的',url:'../wode/index'},
    ],
  },
  bindViewTap:function(index){
    let _this=this;
    let _index=index.currentTarget.dataset.index;
    wx.navigateTo({
      url: _this.data.menu[_index].url,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})