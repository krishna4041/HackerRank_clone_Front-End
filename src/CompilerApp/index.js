import React, {Component} from 'react'
import {Provider} from '../context'

class CompilerApp extends Component {
    render() {
        return (
            <Provider>
                Hello World                
            </Provider>
        )
    }
}

export default CompilerApp