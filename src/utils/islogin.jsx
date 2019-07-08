import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

const Islogin=Wrap=>{
    return class extends Component{
        render(){
            return window.localStorage.getItem('user')?<Wrap {...this.props}/>:<Redirect to='/login'/>
        }
    }
}

export default Islogin