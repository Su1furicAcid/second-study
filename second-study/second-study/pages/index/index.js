// index.js
// 列表数据
const classes = require('./data.js');
const totalClass=classes.length;
//const totalPage = Math.ceil(classes.length / 10);

Page({
  data: {
    classes: classes.slice(0, 10),
    totalPage: 4,
    curPage: 1,
    pageSize: 10,
    pageSizeArray: [5, 10, 20, 50],
    isHighlight: false,
    notFull: true,
    preDisabled: true,
    nxtDisabled: false,
    notHighlight: true
  },
  updateClasses() {
    this.setData({
      classes: classes.slice((this.data.curPage - 1) * this.data.pageSize, this.data.curPage * this.data.pageSize),
    });
  },
  onPrevTap() {
    if (this.data.curPage <= 1) return;
    this.setData({
      curPage: this.data.curPage - 1,
    });
    if(this.data.curPage <= 1){
      this.setData({preDisabled: true})
    }else{
      this.setData({preDisabled: false})
    }
    if(this.data.curPage >= this.data.totalPage){
      this.setData({nxtDisabled: true})
    }else{
      this.setData({nxtDisabled: false})
    }
    this.updateClasses();
  },
  onNextTap() {
    if (this.data.curPage >= this.data.totalPage) return;
    this.setData({
      curPage: this.data.curPage + 1,
    });
    if(this.data.curPage <= 1){
      this.setData({preDisabled: true})
    }else{
      this.setData({preDisabled: false})
    }
    if(this.data.curPage >= this.data.totalPage){
      this.setData({nxtDisabled: true})
    }else{
      this.setData({nxtDisabled: false})
    }
    this.updateClasses();
  },
  onPageSizeChange(e) {
    console.log(e.detail.value);
    this.setData({pageSize: this.data.pageSizeArray[e.detail.value]})
    this.setData({totalPage: Math.ceil(totalClass / this.data.pageSize)})
    if(this.data.totalPage <= 1){
      this.setData({notFull: false})
    }else{
      this.setData({notFull: true})
    }
    if(this.data.curPage>this.data.totalPage){
        this.setData({curPage: this.data.totalPage})
    }
    this.updateClasses();
    // write your code here
  },
  onHightlightChange(e) {
    console.log(e.detail.value);
    this.setData({notHighlight: !e.detail.value});
    //console.log(this.data.notHighlight)
    // write your code here
  },
});
