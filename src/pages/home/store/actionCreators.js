import axios from 'axios';
import  * as constants from './constants';

const getHomeData = (result)=> ({
  type: constants.GET_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList:result.recommendList
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