import React, { Component } from 'react'
import Footer from '../../component/footer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ListActions from '../../store/list.action'
import Item from '../../component/item'

class Home extends Component {
    render() {
        let { data } = this.props;
        return (
            <div className="wrapper">
                <main className="main">
                    <div className="content">
                        {data.map((item, index) => {
                            return <Item key={index} item={item}></Item>
                        })}
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.data.length)
        !this.props.data.length && this.props.initData()
    }
}
export default connect(state => {
    return {
        data: state.list.data
    }
}, dispatch => {
    return bindActionCreators(ListActions, dispatch)
})(Home)