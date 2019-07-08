import axios from 'axios'
import { INIT_DATA } from './any.type';

let initData = () => {
    return dispatch => {
        axios.get('/api/list').then(res => {
            let data = res.data;
            dispatch({ type: INIT_DATA, data })
        })
    }
}

export default {
    initData
}