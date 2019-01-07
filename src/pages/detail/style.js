import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
`; 

export const Header = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  line-height: 44px;
  color: #333;
  font-weight: bold;
`
export const Content = styled.div`
  color: #2f2f2f;
  img{
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
  p{
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  b{
    font-weight: bold;
  }
`