import React, { Component } from 'react';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
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
}

export default Home;