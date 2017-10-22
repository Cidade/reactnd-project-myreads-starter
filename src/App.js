import React from 'react'
import * as BooksAPI from './util/BooksAPI'
import './App.css'
import BookCase from './BookCase'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  onSelectChangeBook = (newShelf, book) => {

    if (book.shelf !== newShelf) {

      book.shelf = newShelf;

      BooksAPI.update(book, newShelf).then(() => {
        this.setState((stateAtual) => ({
          books: stateAtual.books.filter(b => b.id !== book.id).concat(book)
        }))
      });
    }
  }

  render() {
    return (
      <div className="app">
        
        <Route exact path="/"
          render={() => (
            <BookCase
              onSelectChangeBook={this.onSelectChangeBook}
              books={this.state.books} />
          )}
        />

        <Route path='/search' render={() => (
          <BookSearch
          onSelectChangeBook={this.onSelectChangeBook}
          booksSelect={this.state.books}
          />
        ) } />
      </div>
    )
  }
}

export default BooksApp