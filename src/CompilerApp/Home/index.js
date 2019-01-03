import React, {Component} from 'react'
import {
    Container,
    Jumbotron,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardHeader,
    CardBody,
    Navbar,
    NavbarBrand,
    Row,
    Col,
} from 'reactstrap'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            username_l: '',
            password_l: '',
            username_s: '',
            password_s: '',
            email_s   : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onLogin      = this.onLogin.bind(this)
        this.onSignup     = this.onSignup.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onLogin(event) {
        event.preventDefault()
        // implement this...
        console.log(this.state)
    }
    onSignup(event) {
        event.preventDefault()
        // implement this...
        console.log(this.state)
    }
    render() {
        return (
            <Container fluid>
                <Navbar color='light' light>
                    <NavbarBrand>Compiler App</NavbarBrand>
                    <Form onSubmit={this.onLogin} inline>
                        <FormGroup>
                            <Input
                                type        = 'text'
                                name        = 'username_l'
                                placeholder = 'Username'
                                onChange    = {this.handleChange}
                                value       = {this.state.username}
                                required
                                autoFocus
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type        = 'password'
                                name        = 'password_l'
                                placeholder = 'Password'
                                onChange    = {this.handleChange}
                                value       = {this.state.password}
                                required
                            />
                        </FormGroup>
                        <Button color='success'>LOGIN</Button>
                    </Form>
                </Navbar>
                <hr />
                <Row>
                    <Col sm={8}>
                        <Jumbotron>
                            <h3>This is the Compiler-App where several competitions are held to test your coding abilities.</h3>
                        </Jumbotron>
                    </Col>
                    <Col sm={4}>
                        <Card className='text-center'>
                            <CardHeader>SIGNUP FORM</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.onSignup}>
                                    <FormGroup row>
                                        <Label sm={4}>Email</Label>
                                        <Col sm={8}>
                                            <Input 
                                                type     = "email" 
                                                name     = "email_s"
                                                value    = {this.state.email_s}
                                                onChange = {this.handleChange}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm={4}>Username</Label>
                                        <Col sm={8}>
                                            <Input 
                                                type     = "text" 
                                                name     = "username_s"
                                                value    = {this.state.username_s}
                                                onChange = {this.handleChange}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm={4}>Password</Label>
                                        <Col sm={8}>
                                            <Input 
                                                type     = "password" 
                                                name     = "password_s"
                                                value    = {this.state.password_s}
                                                onChange = {this.handleChange}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <Button color='danger' block>SIGNUP</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home