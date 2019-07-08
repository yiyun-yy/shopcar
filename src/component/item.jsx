import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class Item extends Component{
    render(){
        let {img,title,money,id}=this.props.item;
        return <dl className="dl" onClick={()=>{
            this.props.history.push(`/detail/${id}`)
        }}>
            <dt>
                <img src={img} alt=""/>
            </dt>
            <dd>
                <p>{title}</p>
                <p>单价:{money}</p>
            </dd>
        </dl>
    }
}
export default withRouter(Item)