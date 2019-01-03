import React, {Component} from 'react'
import {Provider} from '../context'
import Home from './Home'

class CompilerApp extends Component {
    render() {
        return (
            <Provider>
                <Home />
            </Provider>
        )
    }
}

export default CompilerApp