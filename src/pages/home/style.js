import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`; 

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top:30px;
  width: 625px;
  .banner-img{
    width:625px;
    height:240px;
  }
`; 

export const HomeRight = styled.div`
  float: right;
  width: 240px;
`; 

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height:32px;
  line-height:32px;
  padding-right:10px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size:14px;
  color:#000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic{
    display: block;
    float:left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`