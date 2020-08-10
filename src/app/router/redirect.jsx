import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';

import Page1 from '../redirect/page1';
import Page2 from '../redirect/page2';
import Page3 from '../redirect/page3';
import Include from '../redirect/include';
import Page404 from '../redirect/page404';

class Redirect extends React.Component {
    render(){
        var urls = [{title:'page1',url:'/page1/姓名1/男的 '},{title:'page2-get请求',url:'/page2'},{title:'page3-post请求',url:'/page3'},{title:'404页面',url:'/4123'}]
        return(
            <div>
                <span>router、fetch</span>
                <Router history={this.props.history}>
                    <table style={{width:'400px',textAlign:'center'}}>
                        <tbody>
                            <tr>
                                <td>
                                    link跳转
                                </td>
                                <td>
                                    js跳转
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <Link to="/page1/姓名/性别">page1</Link><br/>
                                        <Link to="/page2">page2-get请求</Link><br/>
                                        <Link to="/page3">page3-post请求</Link><br/>
                                        <Link to="/page323">404页面</Link><br/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {urls.map((item, index) => {
                                            return <li style={{cursor:'pointer',color:'#007BBC'}} key={index} onClick={this.oclickUrl.bind(this,item.url)}>{item.title}</li>
                                        })}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* 以下是react-router4 版本以前写法
                    <Route path="/" component={Include}>
                            <Route path="/page1" component={Page1} />
                            <Route path="/page2" component={Page2} />
                            <Route path="/page3" component={Page3} />
                            <Route path="/" component={Page404} />
                    </Route> */}
                    <Include path="/" component={Include}>
                        <Switch>
                            <Route path="/page1/:name/:sex" component={Page1} />
                            <Route path="/page2" component={Page2} />
                            <Route path="/page3" component={Page3} />
                            <Route path="/" component={Page404} />
                        </Switch>
                    </Include>
                </Router>
            </div>
        )
    }

    oclickUrl(url){
        this.props.history.push(url);
    }
}
export default Redirect;