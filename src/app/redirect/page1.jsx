import React from 'react';


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from '../actions/userinfo'
 
class Page1 extends React.Component{
    render(){
        return(
            <div>
                用户名：{this.props.userinfo.userid}<br/>
                城市：{this.props.userinfo.city}
                <div>This is Page1! 参数：name={this.props.match.params.name}  sex={this.props.match.params.sex}</div>
            </div>
        );
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
)(Page1)