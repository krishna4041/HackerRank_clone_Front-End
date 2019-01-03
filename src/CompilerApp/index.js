import React, {Component} from 'react'
import {Provider} from '../context'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from './Home'

class CompilerApp extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <React.Fragment>
                        <Route 
                            exact path='/'
                            render={() => <Redirect to='/home' />}
                        />
                        <Route 
                            exact path='/home'
                            component={Home}
                        />
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default CompilerApp