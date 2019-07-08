import { INIT_DATA } from './any.type'
import { ADD_LIST, ADD_NUM, CHECK_ITEM, CHECK_ALL } from './car/car.type'

let data = {
    data: [],
    car: [],
    num: 0,
    totalMoney: 0,
    checkAll: false,
    detail:{},
}

function Total(data) {
    let prev = data.reduce((prev, next) => {
        return prev += next.checked ? next.money * next.num : 0
    }, 0)
    return prev
}
let list = (state = data, action) => {
    switch (action.type) {
        case INIT_DATA:
            state.data = action.data
            return { ...state, data: [...state.data] }
        case 'SEARCH_LIST':{
            console.log(action.id)
            state.detail=state.data.find(item => item.id === action.id * 1)
            return {...state,detail:{...state.detail}}
        }
        case ADD_LIST: {
            let index = state.data.findIndex(item => item.id === action.id * 1)
            if (state.data[index].num) {
                state.data[index].num++
                state.data[index] = { ...state.data[index] }
            } else {
                state.data[index].num = 1;
                state.data[index].checked = false;
                state.checkAll = false;
                state.data[index] = { ...state.data[index] }
                state.car.push(state.data[index])
            }
            return { ...state, data: [...state.data], car: [...state.car] }
        }
        case ADD_NUM: {
            let index = state.car.findIndex(item => item.id === action.id * 1)
            state.num = action.num
            state.car[index].num = state.num;
            state.totalMoney = Total(state.car)
            return { ...state, car: [...state.car] }
        }
        case CHECK_ITEM: {
            let index = state.car.findIndex(item => item.id === action.id * 1)
            state.car[index].checked = action.checked;
            state.totalMoney = Total(state.car)
            state.checkAll = state.car.every(item => item.checked)
            return { ...state, car: [...state.car] }
        }
        case CHECK_ALL: {
            state.checkAll = action.checked;
            state.car.map((item, index) => {
                item.checked = action.checked;
                return { ...item }
            })
            state.totalMoney = Total(state.car)
            return { ...state, car: [...state.car] }
        }
        default:
            return state
    }

}

export default list