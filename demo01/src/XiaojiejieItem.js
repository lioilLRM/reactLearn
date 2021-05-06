import React, { Component } from 'react';
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component {
  state = {  }
  constructor(props){
    super()
    this.clickItem = this.clickItem.bind(this)
  }
  render() { 
    return ( 
      <div onClick={this.clickItem}>{this.props.teacherName} - {this.props.content}</div>
     );
  }
  clickItem(){
    console.log( this.props.index);
    this.props.delService(this.props.index)
    
  }
}

// 类型校验
XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  delService: PropTypes.func,
  teacherName: PropTypes.string.isRequired
}
 
export default XiaojiejieItem;