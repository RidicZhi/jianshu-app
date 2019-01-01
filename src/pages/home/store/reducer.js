
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
  }]
});

export default (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}