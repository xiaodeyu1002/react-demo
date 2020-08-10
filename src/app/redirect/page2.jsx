import React from 'react';
import {get} from '../http/http'

import 'whatwg-fetch'
import 'es6-promise'

class Page2 extends React.Component{

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
        // var result = fetch('/sycx/getUserList?a=100&b=200', {
        //     method: 'GET',
        //     credentials: 'include',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*'
        //     }
        // })

        //对请求封装后写法
        var result = get('/sycx/getUserList?a=100&b=200')
        
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
 
export default Page2;