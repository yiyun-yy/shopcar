import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import list from './list.reducer'
import car from './car/car.reducer'

let reducer =combineReducers({
    list,
    car
})

let store =createStore(reducer,applyMiddleware(thunk))

export default store