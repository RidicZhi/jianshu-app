import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';
import { searchFocusedAction, searchBlurAction } from '../../store/actionCreator';

const Header = (props) => {
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
            in={props.focused} 
            timeout={200} 
            classNames="slide"
          >
            <NavSearch 
              className = {props.focused ? 'focused' : ''}
              onFocus = {props.handleInputFocus}
              onBlur = {props.handleInputBlur}
              ></NavSearch>
          </CSSTransition>
          <i className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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


const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputFocus(){
      const action = searchFocusedAction();
      dispatch(action);
    },
    handleInputBlur(){
      const action = searchBlurAction();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
