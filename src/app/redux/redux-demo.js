import {createStore} from 'redux'

export default function(){

    //定义规则
    function counter(state = 1, action){
        switch (action.type){
            case 'INSERT':
                return state + 1
            case 'DELETE':
                return state - 1
            default:
                return state - 1
        }
    }

    //根据规则生成store
    let store = createStore(counter)

    //定义数据变化之后的派发规则（state）
    store.subscribe(() => {
        console.log('打印值1', store.getState())
    })

    store.subscribe(() => {
        console.log('打印值2', store.getState())
    })

    //触发数据变化
    store.dispatch({type:'INSERT'})
    store.dispatch({type:'DELETE'})
    store.dispatch({type:'DEFAULT'})
}