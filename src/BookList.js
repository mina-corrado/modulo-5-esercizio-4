import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SingleBook } from "./SingleBook";

export class BookList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filter: '',
        }
    }

    render() {
        const books = this.props.books;
        const state = this.state;
        
        return (
            <React.Fragment>
                <hr />
                <label className="d-flex flex-column mb-4 p-4">
                    <strong>Filtra libri:</strong>
                    <input type="text" id="filtra" name="filtra"  value={state.filter} onChange={(e) => this.setState({filter: e.target.value})} placeholder="filtra libri che contengono nel titolo..."/>
                </label>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4 ml-0 mr-0">
                {
                books.filter((book) => state.filter!=='' ? book.title.toLowerCase().includes(state.filter.toLowerCase()) : true).map((book) => {
                    return (
                        <Col key={book.asin} className="mb-2">
                            <SingleBook book={book}></SingleBook>
                        </Col>
                    )
                })
                }
                </Row>
            </React.Fragment>
        );
    }
}