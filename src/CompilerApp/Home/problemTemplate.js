import React, {Component} from 'react'
import {
    Card,
    CardTitle,
    CardText,
    Badge
} from 'reactstrap'
import './style.css'
import withRouter from 'react-router-dom/withRouter';

class ProblemTemplate extends Component {
    constructor() {
        super()
        this.redirect = this.redirect.bind(this)
    }
    redirect(event, problemId) {
        event.preventDefault()
        this.props.history.push(`/problems/${problemId}`)
    }
    render() {
        return (
            <Card 
                tag="a"
                className='problem-card' 
                body
                onClick={(event) => this.redirect(event, this.props.id)}
                >
                <CardTitle className='display-4'>{this.props.name}</CardTitle>
                <CardText> 
                    Difficulty : <Badge color={this.props.difficulty === 'easy' ? 'primary' : this.props.difficulty === 'medium' ? 'warning' : 'danger'}>
                                    {this.props.difficulty}
                                 </Badge>
                </CardText>
            </Card>
        )
    }
}

export default withRouter(ProblemTemplate)