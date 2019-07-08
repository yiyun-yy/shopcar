import React from 'react'
import RouterView from './RouterView'
import routes from './routes'
import {BrowserRouter} from 'react-router-dom'

function Router(){
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
}
export default Router