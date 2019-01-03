import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight 
} from './style';

class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img  className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4592/e0033fec6cf2a554d07a08dec30fb5577e862920.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='banner'/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      const action = {
        type: 'get_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList:result.recommendList
      }
      this.props.getHomeData(action);
    }).catch(()=>{
      console.log("Network error")
    })
  }
}

const mapDispatch = (dispatch)=>({
  getHomeData(action){
    dispatch(action);
  }
})

export default connect(null,mapDispatch)(Home);