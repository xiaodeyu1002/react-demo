import 'whatwg-fetch'
import 'es6-promise'

export function get(url){
    var result = fetch(url,{
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    return result
}

export function post(url, paramsObj){
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: obj2params(paramsObj)
    })

    return result
}

//把对象拼接成 key1=value1&key2=value2&key3=value3 的字符串形式
function obj2params(obj){
    var result = '';
    var item;
    for(item in obj){
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }

    if(result){
        result = result.slice(1);
    }

    return result;

}