import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style';
import { actionCreators } from './store';

class Header extends Component {

  getListArea = ()=>{
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave , handleSwitchPage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if(newList.length){
      for (let i = (page-1)*10 ; i < page*10 ; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused||mouseIn) {
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
              <SearchInfoTitle>
                Hot Search
                <SearchInfoSwitch onClick={() => handleSwitchPage(page,totalPage,this.spinIcon) }>
                  <i ref={(icon) => {this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
                  refresh
                </SearchInfoSwitch>
              </SearchInfoTitle>
  
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
      )
    }else{
      return null;
    }
  }

  render(){
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
  
        <Nav>
          <NavItem className = 'left active'>Home</NavItem>
          <NavItem className = 'left'>Download App</NavItem>
          <NavItem className = 'right'>Login</NavItem>
          <NavItem className = 'right'>
            <i className="iconfont icon-xxx">&#xe636;</i>
          </NavItem>
  
          <SearchWrapper>
            <CSSTransition
              in={focused} 
              timeout={200} 
              classNames="slide"
            >
              <NavSearch 
                className = {focused ? 'focused' : ''}
                onFocus = {() => handleInputFocus(list)}
                onBlur = {handleInputBlur}
                ></NavSearch>
            </CSSTransition>
            <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
  
        </Nav>
  
        <Addition>
          <Button className = 'compose'>
            <i className = "iconfont icon-xxx">&#xe615;</i>
            Compose
          </Button>
          <Button className = 'reg'>Register</Button>
        </Addition>
  
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //focused: state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputFocus(list){
      if(list.size===0){
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocusAction());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlurAction());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleSwitchPage(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle){
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
      //console.log(originAngle);
      if(page< totalPage){
        dispatch(actionCreators.switchPage(page+1));
      }else {
        dispatch(actionCreators.switchPage(1));
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
