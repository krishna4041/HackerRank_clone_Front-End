import React, {Component} from 'react'
import {Provider} from '../context'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Problem from './Problem'
import Upload from './Upload'

class CompilerApp extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <React.Fragment>
                        <Route 
                            exact path='/'
                            render={() => <Redirect to='/problems' />}
                        />
                        <Route
                            exact path='/problems'
                            render={() => <Home />}
                        />
                        <Route
                            exact path='/problems/:p_id'
                            render={(props) => <Problem id={props.match.params.p_id} />}
                        />
                        <Route
                            excat path='/upload'
                            render={() => <Upload />}
                        />
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default CompilerApp