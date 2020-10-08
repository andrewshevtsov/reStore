import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { HomePage, CartPage } from '../pages'
import Header from '../header'

import './app.css'

const App = () => {

    return (
        <main role='main' className='container'>
            <Header />
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}>
                </Route>
                <Route
                    path='/cartpage'
                    component={CartPage}>
                </Route>
            </Switch>
        </main>
    )
}

export default App