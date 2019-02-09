import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {
    Container,
    Alert,
    Button
} from 'reactstrap'
import { ClipLoader } from 'react-spinners'
import ProblemTemplate from './problemTemplate'
import NavBar from '../templates/NavBar'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            loadedData        : false,
            responseSuccessful: false,
            problems          : []
        }
        this.fetchProblems    = this.fetchProblems.bind(this)
        this.redirectToUpload = this.redirectToUpload.bind(this)
    }
    fetchProblems() {
        fetch(`http://localhost:8000/problem/`)
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                throw new Error(res.statusText)
            })
            .then(problems => {
                this.setState({
                    loadedData        : true,
                    responseSuccessful: true,
                    problems          : problems
                })
            })
            .catch(err => {
                this.setState({
                    loadedData: true,
                    responseSuccessful: false,
                })
                console.log(err)
            })
    }
    redirectToUpload() {
        this.props.history.push('/upload')
    }
    componentDidMount() {
        // this.fetchProblems()
        this.setState({
            loadedData: true,
            responseSuccessful: true,
            problems: [
                {
                    id: 1,
                    name: '2-sum',
                    difficulty: 'easy'
                },
                {
                    id: 2,
                    name: '3-sum',
                    difficulty: 'medium'
                },
                {
                    id: 3,
                    name: 'reverse linked list',
                    difficulty: 'hard'
                },
                {
                    id: 4,
                    name: '2-sum',
                    difficulty: 'easy'
                },
            ]
        })
    }
    render() {
        return (
            <Container fluid>
                <NavBar />
                <Container className='top-spacing'>
                    {
                        this.state.loadedData ?
                            this.state.responseSuccessful ?
                                this.state.problems.length === 0 ?
                                    <Alert color='danger'>
                                        NO PROBLEMS PRESENT
                                    </Alert>
                                :
                                    this.state.problems.map((p) => 
                                        <ProblemTemplate
                                            key         = {p.id}
                                            id          = {p.problem_id}
                                            name        = {p.problem_name}
                                            difficulty  = {p.problem_level}
                                        />
                                    )

                            :
                            <Alert color='danger'>
                                SERVER UNRESPONSIVE! PLEASE TRY AGAIN LATER
                            </Alert>
                        :
                            <div className='page-loader'>
                                <ClipLoader />
                            </div>
                    }
                    <Button
                        id='add-btn'
                        color='info'
                        onClick={this.redirectToUpload}
                        >
                        +
                    </Button>
                </Container>
            </Container>
        )
    }
}

export default withRouter(Home)