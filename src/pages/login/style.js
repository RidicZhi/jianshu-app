import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  right 0;
  bottom: 0;
  background: #eee;
  z-index: 0;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  border-radius: 12px;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  ::placeholder { color: #969696; };
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  margin: 15px auto;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  text-align: center;
`;

