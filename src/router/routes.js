import Loadable from 'react-loadable'
import React from 'react'

function loading(){
    return <div>loading...</div>
}

let Home =Loadable({loading:loading,loader:()=>import('../views/home')})
let Mine =Loadable({loading:loading,loader:()=>import('../views/mine')})
let Search =Loadable({loading:loading,loader:()=>import('../views/search')})
let Shopcar =Loadable({loading:loading,loader:()=>import('../views/shopcar')})
let ClassType =Loadable({loading:loading,loader:()=>import('../views/classtype')})
let Login =Loadable({loading:loading,loader:()=>import('../views/login')})
let Detail =Loadable({loading:loading,loader:()=>import('../views/detail')})


const routes=[
    {
        path:'/home',
        component:Home
    },{
        path:'/mine',
        component:Mine
    },{
        path:'/search',
        component:Search
    },{
        path:'/shopcar',
        component:Shopcar
    },{
        path:'/classtype',
        component:ClassType
    },{
        path:'/login',
        component:Login
    },{
        path:'/detail/:id',
        component:Detail
    },
    ,{
        from:'/',
        to:'/home'
    }
]

export default routes