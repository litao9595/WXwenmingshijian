// compoments/multipleChoice/multipleChoice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {name:'赛事服务',id:'',status:false},
      {name:'应急救援',id:'',status:false},
      {name:'城市运行',id:'',status:false},
      {name:'文化教育',id:'',status:false},
      {name:'关爱服务',id:'',status:false},
    ],
    max:0,
    submitVal:[],

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    clickChoice:function(e){
      let _index=e.currentTarget.dataset.index;
      let _list='list['+_index+'].status';
      let _status=this.data.list[_index].status;
      let _max=this.data.max;
      if(_status){
        // console.log('取消')
        this.setData({
          [_list]:false,
          max:_max-1
        })
      }else{
        // console.log('添加')
        if(this.data.max>3){
          console.log("超过4个")
        }else{
          this.setData({
            [_list]:true,
            max:_max+1
          })
        }
        
      }
    },
    clickCancel:function(){
      //取消
      this.triggerEvent("twoLevelCommentBtn", []);
    },
    clickConfirm:function(){
      //确定
    },
  }
})
