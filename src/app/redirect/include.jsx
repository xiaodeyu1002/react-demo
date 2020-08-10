import React from 'react';
 
class Page0 extends React.Component{
    render(){
        return(
            <div>
                <p>头文件</p>
                <div>{this.props.children}</div>
                <p>尾文件</p>
            </div>
        );
    }
}
 
export default Page0;