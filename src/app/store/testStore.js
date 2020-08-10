import {createStore} from 'redux'

import rootReducer from '../reducer/index';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )

    return store
}