import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

/**
 * Classe responsavel por colocar cada book em sua estante especifica
 */
class BookCase extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        const { books, onSelectChangeBook } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ListBooks
                            title='Currently Reading'
                            onSelectChangeBook={onSelectChangeBook}
                            lstBooks={books.filter(b => b.shelf === 'currentlyReading')}
                        />

                        <ListBooks
                            title='Want to Read'
                            onSelectChangeBook={onSelectChangeBook}
                            lstBooks={books.filter(b => b.shelf === 'wantToRead')}
                        />

                        <ListBooks
                            title='Read'
                            onSelectChangeBook={onSelectChangeBook}
                            lstBooks={books.filter(b => b.shelf === 'read')}
                        />
                    </div>
                </div>
                <Link className="open-search" to='/search'>
                    Add a book
                </Link>
            </div>
        )
    }
}

export default BookCase;