import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Classtype extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/home">刷新</NavLink>
                <NavLink to="/classtype">分类</NavLink>
                <NavLink to="/search">发现</NavLink>
                <NavLink to="/shopcar">购物车</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </div>
        )
    }
}
export default Classtype