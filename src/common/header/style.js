import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href:'/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  `;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;
  
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float:right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a
  }

`;

export const NavSearch = styled.input.attrs({
  placeholder: 'search'
})`
  width: 180px;
  line-height: 56px;
  height: 38px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
`;

export const Addition = styled.div`
 position: absolute;
 right: 0;
 top: 0;
 height 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding 0 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg{
    color: #ec6149
  }
  &.compose{
    background: #ec6149;
    color: #fff;
  }
  .iconfont{
    background: #ec6149;
  } 
`;

export const SearchWrapper = styled.div`
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    background: green;
  }
  float: left;
`