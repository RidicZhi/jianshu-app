import React, { Component } from 'react';
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />

        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className="iconfont icon-xxx">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className="iconfont icon-xxx">&#xe614;</i>
          </SearchWrapper>
        </Nav>

        <Addition>
          <Button className='compose'>
            <i className="iconfont icon-xxx">&#xe615;</i>
            Compose
          </Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;