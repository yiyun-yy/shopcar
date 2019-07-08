import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ListActions from '../../store/car/car.action.js'

class Detail extends Component {
    state = {
        detail: {},
    }
    render() {
        console.log(this.props)
        let { img, id, title, money } = this.props.detail;
        let num = this.props.car.length;
        return (
            <div className="wrapper">
                <header className="header">
                    <span onClick={() => {
                        this.props.history.goBack()
                    }}>&lt;</span>
                    <span>详情页</span>
                </header>
                <main className="main">
                    <div>
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </div>
                    <div>
                        <p>{title}</p>
                        <p>单价:{money}</p>
                    </div>
                </main>
                <footer className="shopcar">
                    <span onClick={() => {
                        this.props.history.push('/shopcar')
                    }}>购物车</span>
                    <span>{num}</span>
                    <button onClick={() => {
                        this.props.addCarList(id)
                    }}>加入购物车</button>
                    <button>立即购买</button>
                </footer>
            </div>
        )
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailList(id)   
    }
}
export default connect(state => {
    return {
        data: state.list.data,
        car: state.list.car,
        detail:state.list.detail
    }
}, dispatch => {
    return bindActionCreators(ListActions, dispatch)
})(Detail)