import React, { Component } from 'react'

/* ---- SERVICES ---- */
import TrivialServices from '../../services/trivial.services'

/* ---- STYLE COMPONENTS ---- */
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

import SearchIcon from '@material-ui/icons/Search';

class TrivialList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            page: 1,
        }
        this.trivialServices = new TrivialServices()
    }

    componentDidMount = () => this.getAllQuestions()

    getAllQuestions = () => {
        this.trivialServices.getAllQuestions()
            .then(allQuestions => this.setState({ questions: allQuestions.results }))
            .catch(err => console.log(err))
    }

    searchQuestion = (value) => {
        this.trivialServices.searchQuestion(value)
            .then(allQuestions => this.setState({ questions: allQuestions }))
            .catch(err => console.log(err))
    }

    handlePages = (page) => {
        this.setState({ page: page })
    }
    handleChange = e => {
        let { value } = e.target
        this.searchQuestion(value)
    }
    render() {
        const rowsPerPage = 10
        return (
            <Container className="my-4">
                <div className="text-center">
                    <input className="form-control mx-1" value={this.questionSearched} type="search" name="search" aria-label="Search"
                        id="index-input" onChange={this.handleChange} />
                    <select className="form-control mx-1">
                        <option>Question</option>
                        <option>User</option>
                        <option>Category</option>
                    </select>
                    <button className="btn btn-sm btn-default mx-1"><SearchIcon />Search</button>
                </div>


                <h2 className="my-3">Browse questions</h2>
                {this.state.questions.length ? <>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type</th>
                                <th scope="col">Difficulty</th>
                                <th scope="col">Question / Statement</th>
                                <th scope="col">Created By</th>
                            </tr>
                        </thead>
                        <tbody>

                            {(rowsPerPage > 0
                                ? this.state.questions.slice(this.state.page * rowsPerPage, this.state.page * rowsPerPage + rowsPerPage)
                                : this.state.questions
                            ).map(elm => (

                                <tr key={elm.question}>
                                    <td>-</td>
                                    <td>{elm.category}</td>
                                    <td>{elm.type}</td>
                                    <td>{elm.difficulty}</td>
                                    <td>{elm.question}</td>
                                    <td className="green-letters"><a href="#">KazuhiraMewtwo</a></td>
                                </tr>
                            ))}


                        </tbody>
                    </Table>

                    <center>
                        <ListGroup as="ul" className="pagination">
                            <ListGroup.Item as="li" className={this.state.page === 1 ? 'active' : null} action onClick={() => this.handlePages(1)}>1</ListGroup.Item>
                            <ListGroup.Item as="li" className={this.state.page === 2 ? 'active' : null} action onClick={() => this.handlePages(2)}>2</ListGroup.Item>
                            <ListGroup.Item as="li" className={this.state.page === 3 ? 'active' : null} action onClick={() => this.handlePages(3)}>3</ListGroup.Item>
                            <ListGroup.Item as="li" className={this.state.page === 4 ? 'active' : null} action onClick={() => this.handlePages(4)}>4</ListGroup.Item>
                            <ListGroup.Item as="li" className={this.state.page === 5 ? 'active' : null} action onClick={() => this.handlePages(5)}>5</ListGroup.Item>
                        </ListGroup>
                    </center>
                </> :
                    <Spinner animation="grow" variant="warning" />}
            </Container>
        )
    }
}

export default TrivialList