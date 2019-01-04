import axios from 'axios';
import  * as constants from './constants';
import { fromJS } from 'immutable';

const getHomeData = (result)=> ({
  type: constants.GET_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList:result.recommendList
});

const moreHomeList = (list, nextPage) => ({
  type: constants.MORE_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      dispatch(getHomeData(result));
    }).catch((err)=>{
      console.log(err)
    })
  }
}

export const addMoreList = (page) => {
  return (dispatch)=>{
    axios.get('/api/homeList.json?page=' + page).then((res)=>{
      const result = res.data.data;
      dispatch(moreHomeList(result, page+1));
    }).catch((err)=>{
      console.log(err)
    })
  }
}