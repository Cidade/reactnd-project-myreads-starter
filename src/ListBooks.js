import React, { Component } from 'react';

/**
 * Classe responsavel por renderizar a lista de livros
 */
class ListBooks extends Component {


    onSelectChange = (e, book) => {

        e.preventDefault();

        if (this.props.onSelectChangeBook)
            this.props.onSelectChangeBook(e.target.value, book);
    }

    render() {

        let { lstBooks, title } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {lstBooks.map((book) =>
                            (<li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:book.imageLinks && book.imageLinks.smallThumbnail && `url(${book.imageLinks.smallThumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select name='sltBook' value={book.shelf} onChange={(event) => this.onSelectChange(event, book)}>
                                                <option style={{ fontWeight: 'bold' }}>Move to...</option>
                                                <option value="none" disabled={!book.shelf || book.shelf === 'none'}>Remove to shelf</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    {book.authors && book.authors.map((autor, index) =>
                                        <div key={index} className="book-authors">{autor}</div>
                                    )}
                                </div>
                            </li>)
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ListBooks;