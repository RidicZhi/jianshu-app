import axios from 'axios';
import  * as constants from './constants';

const getDetailData = (result) => ({
  type: constants.GET_DETAIL_DATA,
  title: result.title,
  content: result.content
})

export const getDetail = (id) => {
  return (dispatch)=>{
    axios.get('/api/detail.json?id=' + id).then((res)=>{
      const result = res.data.data;
      dispatch(getDetailData(result));
    }).catch((err)=>{
      console.log(err)
    })
  }
}