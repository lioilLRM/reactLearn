import React, { Component, Fragment} from 'react';
import XiaojiejieItem from './XiaojiejieItem'
import './style.css'

class Xiaojiejie extends Component {
  constructor(props){
    super()
    this.state = {
      inputValue: '',
      list: ['草船借箭', '逻辑训练']
    }
    
  }

  UNSAFE_componentWillMount(){
    console.log('1-即将挂载');
    
  }

  componentDidMount(){
    console.log('3-挂载完成');
    
  }



  render(){
    console.log('2-渲染中');
    
    return (
      <Fragment>
        <div >
          <label htmlFor="addService">加入服务</label>
          <input id="addService" className="input" type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addService.bind(this)}>添加服务</button>
        </div>
        {/* 注释 */}
        <ul ref={(ul)=>{this.ul = ul}}>
          {
            this.state.list.map((item, index) => {
              // return <li key={index+item} onClick={this.delService.bind(this, index)}>{item}</li>
              return (
                  <XiaojiejieItem key={index+item} content={item} index={index} teacherName='诸葛亮' delService={this.delService.bind(this)}></XiaojiejieItem>
              )
            })
          }
        </ul>


      </Fragment>
    )
  }

  inputChange(e){
    // console.log(this);
    
    console.log(e.target.value);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }
  addService(){
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    },()=> {
      console.log('div 的长度 ：',this.ul.querySelectorAll('div').length);
    })

    

  }

  delService(index) {
    console.log('index', index);
    
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie