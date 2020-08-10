import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from '../actions/userinfo'

class Hello extends React.Component{
    render(){
        return(
            <div>
                <p>Hello World - redux</p>
                <hr style={{border:'5px',backgroundColor:'#000000',height:'5px'}}/>
                用户名：{this.props.userinfo.userid}<br/>
                城市：{this.props.userinfo.city}<br/>
                <button onClick={this.changeUserInfo.bind(this)}>修改</button>
            </div>
        )
    }

    changeUserInfo(){
        const actions = this.props.userinfoActions
        actions.login({
            userid: '123',
            city: 'jinan'
        })
    }

    componentDidMount(){
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'weifang'
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
)(Hello)