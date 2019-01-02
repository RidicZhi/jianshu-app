
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/7345682-7b17eb0671612d34.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' 
  },{
    id: 2,
    title: '手绘',
    imgUrl: '//upload-images.jianshu.io/upload_images/3973754-1fbddc4eb3ee60be.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  articleList:[{
    id: 1,
    title: '千层饼这么做，香甜酥软，层次分明，一家人都爱吃',
    desc: '饼，馒头。这些面食是我们饭桌上的主食了。但是由于主食单调，我们经常要换个花样，今天就给大家分享一个千层饼的新做法 我们理解的千层饼，大都是大饼，...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12579077-1c3652d1d3292eb3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '坚持做一件事情100天，在我身上发生了什么？',
    desc: '9月18日发布了第一篇文章，《坚持早起21天（5点），我发生了什么？》，当时只是想着记录一下自己的生活，于是就没有再来简书了，没想到今天偶然打开...',
    imgUrl: '//upload-images.jianshu.io/upload_images/2069606-997e688996251853.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '吴奇隆情史录：爱是天时地利的迷信',
    desc: '文/婉兮 图/网络 1 吴奇隆原本是体育生，奥运会中华台北的“种子选手”之一，和唱歌跳舞演戏风马牛不相及。 但某天在大街上摆地摊时，青春帅气的...',
    imgUrl: '//upload-images.jianshu.io/upload_images/1812827-cb48691f988a39c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}