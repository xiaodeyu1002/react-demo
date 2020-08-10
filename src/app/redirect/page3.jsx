import React from 'react';
import {post} from '../http/http'

import 'whatwg-fetch'
import 'es6-promise'

class Page3 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {datas: []};
    }


    render(){
        return(
            <div>
                <div>This is Page3!</div>
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>登录名</td>
                            <td>密码</td>
                        </tr>
                        {
                            this.state.datas.map((item, index) =>
                                <tr key={index}>
                                    <td key={'xm' + index}>{item.id}</td>
                                    <td key={'xb' + index}>{item.loginName}</td>
                                    <td key={'nl' + index}>{item.password}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount(){

        //原生写法
        // var result = fetch('/sycx/userList', {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     // 注意 post 时候参数的形式
        //     body: "a=100&b=200"
        // })

        //对请求封装后写法
        var result = post('/sycx/userList', {
            a:100,
            b:200
        })

        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                datas: json.list
            });
            console.log(json.list)
        })        
    }

    componentDidUpdate(){
        console.log("2222222222222")
    }
}
 
export default Page3;