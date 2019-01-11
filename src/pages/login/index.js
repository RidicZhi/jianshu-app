import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Login extends PureComponent{
  render(){
    const { loginStatus } = this.props;
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
          <Input placeholder='account' ref={(input) => {this.account=input}} />
          <Input placeholder='password' type='password' ref={(input) => {this.password=input}} />
          <Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/' />
    }
  }
  
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
})

const mapDispatch= (dispatch) => ({
  login(account, password){
    dispatch(actionCreators.login(account.value, password.value))
  }
})


export default connect(mapState, mapDispatch)(Login);