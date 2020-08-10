import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './app/home/home';
import Hello from './app/hello/hello'

import {Provider} from 'react-redux'
import configureStore from './app/store/testStore'

//路由
import Redirect from './app/router/redirect.jsx'
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();

const store = configureStore()


ReactDOM.render(
    <div>
        <Provider store = {store}>
          <table>
            <tbody>
              <tr>
                <td>
                    <Hello/>
                    <Home title = "表格标题"/>
                </td>
                <td style={{width:'50px',backgroundColor:'#000'}}></td>
                <td style={{verticalAlign:'top'}}>
                  <Redirect history={hashHistory}/>
                </td>
              </tr>
            </tbody>
          </table>
        </Provider>
    </div>,
  document.getElementById('root')
);

