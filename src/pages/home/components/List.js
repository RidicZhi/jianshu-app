import React, { Component, Fragment } from 'react';
import { ListItem,ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component{
  render(){
    const{ list } = this.props;
    return (
      <Fragment>
        {
          list.map((item)=>(
            <ListItem key={item.get('id')}>
              <img className='pic' src={item.get('imgUrl')} alt='img' />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            )
          )
        }
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return{
    list: state.getIn(['home','articleList'])
  }
}

const mapDispatch = (dispatch) => {
  return{

  }
}

export default connect(mapState,mapDispatch)(List);