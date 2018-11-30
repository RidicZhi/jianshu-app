import { constants } from './';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocusAction = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () =>{
  return (dispatch) =>{
    axios.get('/api/headerList.json').then((res) => {
      dispatch(changeList(res.data.data));
    }).catch(() => {
      console.log("error")
    })
  }
};

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});