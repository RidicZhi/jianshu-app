import React, { Component , Fragment } from 'react';
import {GlobalStyle} from './style';
import {GlobalStyleIcon} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Fragment>
          <GlobalStyle />
          <GlobalStyleIcon />
          <BrowserRouter>
            <Fragment>  
              <Header /> 
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route> 
            </Fragment>  
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
