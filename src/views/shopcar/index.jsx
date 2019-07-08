import React, { Component } from 'react'
import Footer from '../../component/footer'
import Islogin from '../../utils/islogin'
import { map } from 'rsvp';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ListActions from '../../store/car/car.action.js'


class Shopcar extends Component {
    render() {
        console.log(this.props);
        let {car,num,totalMoney,checkAll}=this.props;
        return (
            <div className="wrapper">
                <header className="header">
                    <span onClick={()=>{
                        this.props.history.goBack()
                    }}>&lt;</span>
                    <span>购物车</span>
                </header>
                <main className="main">
                    <div className="con">
                        {car.length?car.map((item,index)=>{
                            return <div className="car" key={index}>
                                <div className="car-left">
                                    <input type="checkbox" checked={item.checked} onChange={()=>{this.checkedItem(item.id,item.checked)}}/>
                                </div>
                                <div className="car-mid">
                                    <p><img src={item.img}/></p>
                                    <p>
                                       <span>{item.title}</span> 
                                       <span>￥{item.money}</span>
                                    </p>
                                </div>
                                <div className="car-right">
                                    <span onClick={()=>{
                                        this.addNum(false,item.id)
                                    }}>-</span>
                                    <span>{item.num}</span>
                                    <span  onClick={()=>{
                                        this.addNum(true,item.id)
                                    }}>+</span>
                                </div>
                            </div>
                        }):null}
                    </div>
                </main>
                <footer className="total">
                    <input type="checkbox" checked={checkAll} onChange={()=>{this.props.CheckedAll(!checkAll)}}/>全选
                    总价:<span>{totalMoney}</span>
                    <button>结算</button>
                </footer>
            </div>
        )
    }
    addNum=(flag,id)=>{
        let {num}=this.props;
        if(flag){
            num=num+1
        }else{
            if(num>0){
                num=num-1
            }
        }
        this.props.AddNumAction(num,id)
    }
    checkedItem=(id,checked)=>{
        this.props.CheckedItem(id,!checked)
    }
}
export default Islogin(connect(state => {
    return {
        data: state.list.data,
        car: state.list.car,
        num:state.list.num,
        totalMoney:state.list.totalMoney,
        checkAll:state.list.checkAll
    }
}, dispatch => {
    return bindActionCreators(ListActions, dispatch)
})(Shopcar))