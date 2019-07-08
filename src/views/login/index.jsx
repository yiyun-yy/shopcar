import React, { Component } from 'react'
import Footer from '../../component/footer'

class Login extends Component {
    state={
        username:"",
        password:'',
    }
    render() {
        let {username,password}=this.state;
        return (
            <div className="wrapper">
                <main className="main">
                    <input name="username" value={username} type="text" onChange={this.handClick}/>
                    <input name="password" value={password} type="text" onChange={this.handClick}/>
                    <button onClick={this.submit}>请先登录</button>
                </main>
                <Footer/>
            </div>
        )
    }
    handClick=(e)=>{
        let {name,value}=e.target
        this.setState({
            [name]:value
        },()=>{
            this.submit=()=>{
                let {username,password}=this.state;
                window.localStorage.setItem('user',JSON.stringify([username,password]));
                this.props.history.push('/shopcar')
            }
        })
    }
}
export default Login