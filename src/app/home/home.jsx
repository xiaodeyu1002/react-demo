import React from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from '../actions/userinfo'

import App from '../../App';


import '../../css/home.css';

import fn from '../redux/redux-demo'
fn()

var trCss = {
  fontSize:'20px',
  fontWeight:'bold'
}

var titles = [
  {name:"姓名1",sex:"性别1",age:"年龄1",id:"title1"},
  {name:"姓名2",sex:"性别2",age:"年龄2",id:"title2"},
  {name:"姓名3",sex:"性别3",age:"年龄3",id:"title3"}
];

class Home extends React.Component{
  render(){
    return (
      <div>
        <span className="spanClass">这是首页-{this.props.title}</span>
        <br/>
        <span style={{cursor:'pointer'}} onClick={this.changeUserInfo.bind(this)}>点击我，修改redux的值</span>
        <table style={{width:'100%',color:'red'}}>
          <tbody>
            <tr style={trCss}>
              <td>姓名</td>
              <td>性别</td>
              <td>年龄</td>
            </tr>
            {
              titles.map((item, index) =>
                  <tr key={index}>
                    <td key={'xm' + index}>{item.name}</td>
                    <td key={'xb' + index}>{item.sex}</td>
                    <td key={'nl' + index}>{item.age}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
          用户名：{this.props.userinfo.userid}<br/>
          城市：{this.props.userinfo.city}<br/>
        <App/>
      </div>
    )
  }

  changeUserInfo(){
    const actions = this.props.userinfoActions
    actions.login({
        userid: '456',
        city: 'beijing'
    })
  }
}


function mapStateToProps(state){
  return {
      userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
      userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)