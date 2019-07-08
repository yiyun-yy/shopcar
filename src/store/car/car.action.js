import { ADD_LIST,ADD_NUM ,CHECK_ITEM,CHECK_ALL} from './car.type'

import axios from 'axios'
import { INIT_DATA } from '../any.type';

let initData = () => {
    return dispatch => {
        axios.get('/api/list').then(res => {
            let data = res.data;
            dispatch({ type: INIT_DATA, data })
        })
    }
}

let detailList=(id)=>{
    return {type:'SEARCH_LIST',id}
}

let addCarList = (id) => {
    return { type: ADD_LIST, id }
}
let AddNumAction=(num,id)=>{
    return {type:ADD_NUM,num,id}
}
let CheckedItem=(id,checked)=>{
    return {type:CHECK_ITEM,id,checked}
}
let CheckedAll=(checked)=>{
    return {type:CHECK_ALL,checked}
}
export default {
    initData,
    addCarList,
    AddNumAction,
    CheckedItem,
    CheckedAll,
    detailList
}