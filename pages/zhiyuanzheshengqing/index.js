// pages/zhiyuanzheshengqing/index.js
var config = require('../../utils/httpConfig.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selct:[1,2,3],//单选拉下值
    formData:{
      id:'',//不传为新增、传了为修改
      status:0,
      centerId:'',
      appId:'',//app用户id
      country:'4544',//国家
      email:'',//邮箱
      volunteerName:'',//姓名
      cardType:'5429',//证件类型
      idCard:'',//身份证号码
      sex:'',//性别
      birthday:'',//出生日期
      politics:'',//政治面貌
      nation:'',//民族
      nativePlace:'',//籍贯
      provinceVal:'7946',//籍贯-省val值
      cityVal:'',//籍贯-市val值
      areaVal:'',//籍贯-区val值
      telephone:'',//手机号
      blog:'',//微博
      address:'',//居住区域
      houseCityVal:'',//居住地-市val值
      houseAreaVal:'',//居住地-区val值
      addressDetail:'',//详细地址
      postalCode:'',//邮编
      degree:'',//最高学历
      empState:'',//从业状态
      serviceArea:'',//服务区域
      serviceCityVal:'',//服务区域-市val值
      serviceTownVal:'',//服务区域-区val值
      serviceSort:'',//服务类别
      serviceType:'',//服务领域行业
    },
    manySelct:false,//多选下拉开关
  },
  clickSubmit:function(){
    console.log(this.data.formData.email)
  },
  // 双向绑定
  towWay:function(e){
    let _type=e.currentTarget.dataset.type;
    let em='formData.'+_type
    this.setData({
      [em]:e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log(e)
    // this.setData({
    //   index: e.detail.value
    // })
  },
  //查询政治面貌
  zhengzhimianmao:function(){
    wx.request({
      url: config.configHttp.findAllPolitics,
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  //多选接收取消
  clickCancel:function(e){
    this.setData({
      manySelct:false
    })
  },
  //开启多选下拉
  clickManySelct:function(){
    this.setData({
      manySelct:true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.zhengzhimianmao();
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