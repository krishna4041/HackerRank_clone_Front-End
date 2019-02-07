import React, {Component} from 'react'
import {withRouter} from 'react-router'
import { 
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col
} from 'reactstrap'
import NavBar from '../templates/NavBar'

class Upload extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            difficulty: '',
            sampleInput: '',
            sampleOutput: '',
            mainCode: '',
            userCode: '',
            testCasesCode: '',
        }
        this.handleChange  = this.handleChange.bind(this)
        this.uploadProblem = this.uploadProblem.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSelectedFile(event) {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    }
    uploadProblem(event) {
        fetch(``, {
            method: 'POST',
            body: JSON.stringify({
                
            })
        })
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
    render() {
        return (
            <Container fluid>
                <NavBar />
                <Container>
                    <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input 
                                type='text'
                                name='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Description</Label>
                            <Input 
                                type='text'
                                name='description'
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup check tag='fieldset'>
                            <legend>Choose Difficulty:</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type='radio' name='easy' />
                                    {' '}Easy
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='radio' name='medium' />
                                    {' '}Medium
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='radio' name='hard' />
                                    {' '}Hard
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <hr />
                        <FormGroup row>
                            <Col>
                                <Label>Main Code</Label>
                                <Input type='file' onChange={this.handleSelectedFile}/>
                            </Col>
                            <Col>
                                <Label>User Code</Label>
                                <Input type='file' onChange={this.handleSelectedFile}/>
                            </Col>
                            <Col>
                                <Label>TestCases Code</Label>
                                <Input type='file' onChange={this.handleSelectedFile}/>
                            </Col>
                        </FormGroup>
                        <Button
                            color='success'
                            onClick={this.uploadProblem}
                            >
                            SUBMIT
                        </Button>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default withRouter(Upload)