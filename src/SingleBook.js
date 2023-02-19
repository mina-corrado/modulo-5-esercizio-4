import React from 'react';
import Card from 'react-bootstrap/Card';
import { CommentArea } from './CommentArea';

export class SingleBook extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selected: false,
        }
    }

    render() {
        const book = this.props.book;
        const state = this.state;
        
        const myStyle = state.selected===true ? { borderWidth: 4, borderColor: 'red', borderStyle: 'solid' } : null;

        return (
            <>
            <Card style={myStyle} onClick={()=>{this.setState({selected: !state.selected})}}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Asin {book.asin} - Prezzo {book.price}€
                    </Card.Text>
                </Card.Body>
            </Card>
            {state.selected && <CommentArea asin={book.asin} />}
            </>

        );
    }
}
