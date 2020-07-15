// pages/demo4/demo4.js
Page({

  data: {
  gender:""
  },
  handleChange(e){
   //获取单选框里的值
   let gender=e.detail.value;
   //把值赋给data中的数据
   this.setData({
     gender:gender=="male"?"男":"女"
   })
  }
})