import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { search } from './util/BooksAPI'
import ListBooks from './ListBooks'
import { debounce } from 'lodash'
import Toggle from 'material-ui/Toggle';




class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booksSearch: [],
      toggle1: false,
      toggle2: false,
      toggle3: false,
      categoria: ''
    }

    //Utilizado para tentar minimizar os erros gerados pelo retorno do backend
    this.searchBook = debounce(this.searchBook.bind(this), 500);
  }

  /**
   * Metodo responsavel por adicionar um filtro por categoria,
   * onde apenas uma opção pode ser selecionada
   * 
   */

  handleToggle = (pToggle) => {

    switch (pToggle.currentTarget.id) {
      case 'toggle1':
        {
          this.setState({ toggle1: !this.state.toggle1 });
          console.log(this.state.toggle1)

          if (this.state.toggle2) {
            if (this.state.toggle1 !== this.state.toggle2) {
              this.setState({ toggle2: !this.state.toggle2 });
            }
          }
          else if (this.state.toggle3) {
            if (this.state.toggle1 !== this.state.toggle3) {
              this.setState({ toggle3: !this.state.toggle3 });
            }
          }

          if (!this.state.toggle1) {
            this.setState({ categoria: 'Fiction' }, this.BooksAjustLis);
          } else {
            this.setState({ categoria: '' }, this.BooksAjustLis);
          }

        }
        break;
      case 'toggle2':
        {
          this.setState({ toggle2: !this.state.toggle2 });
          console.log(this.state.toggle2)

          if (this.state.toggle1) {
            if (this.state.toggle1 !== this.state.toggle2) {
              this.setState({ toggle1: !this.state.toggle1 });
            }
          } else if (this.state.toggle3) {
            if (this.state.toggle2 !== this.state.toggle3) {
              this.setState({ toggle3: !this.state.toggle3 });
            }
          }

          if (!this.state.toggle2) {
            this.setState({ categoria: 'Computers' }, this.BooksAjustLis);
          } else {
            this.setState({ categoria: '' }, this.BooksAjustLis);
          }
        }
        break;

      case 'toggle3':
        {
          this.setState({ toggle3: !this.state.toggle3 });
          console.log(this.state.toggle3)

          if (this.state.toggle1) {
            if (this.state.toggle1 !== this.state.toggle3) {
              this.setState({ toggle1: !this.state.toggle1 });
            }
          } else if (this.state.toggle2) {
            if (this.state.toggle2 !== this.state.toggle3) {
              this.setState({ toggle2: !this.state.toggle2 });
            }
          }

          if (!this.state.toggle3) {
            this.setState({ categoria: 'Comics & Graphic Novels' }, this.BooksAjustLis);
          } else {
            this.setState({ categoria: '' }, this.BooksAjustLis);
          }
        }
        break;

      default:
        break;


    }
  }

  /**
   * Metodo que realiza a busca dos books de acordo com o que foi inserido no input text
   */
  searchBook = (filtroInput) => {

    if (!filtroInput) {
      this.setState({ booksSearch: [] }, this.BooksAjustLis)
    }
    else {

      search(filtroInput).then((books) => {

        if (books.error) {

          console.log(`Erro de retotno: ${books.error}`);
          this.setState({ booksSearch: [] }, this.BooksAjustLis);

        } else {

          if (this.props.booksSelect) {
            this.props.booksSelect.forEach((book) => {
              books = books.map((item) => {
                if (item.id === book.id) {
                  item['shelf'] = book.shelf;
                }
                return item;
              });
            });
          }
          this.setState({ booksSearch: books }, this.BooksAjustLis);
        }
      }).catch(erro => console.log(`Erro gerado:${erro}`));
    }
  }

  /**
   * Metodo responsavel por realizar a filtragem dos items que foram buscados,
   * em alguma categoria selecionada caso exista
   */
  BooksAjustLis = () => {

    let lstBooksAjust = [];
    const lstBooksSearch = this.state.booksSearch;
    const mCategoria = this.state.categoria;

    if (mCategoria !== '' && lstBooksSearch.length > 0) {

      lstBooksAjust = lstBooksSearch.filter((book) => book.categories && book.categories.includes(mCategoria));

      this.setState({ books: lstBooksAjust });
    }
    else {

      this.setState({ books: lstBooksSearch });
    }
  }

  render() {

    const styles = {
      toggle: {
        marginBottom: 10,
      }
    };

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBook(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <div className="search-books-togle-wrapper">
            <h4>Categories</h4>
            <div className="search-books-togle-box">
              <Toggle
                id="toggle1"
                label="Fiction"
                style={styles.toggle}
                toggled={this.state.toggle1}
                onToggle={(event) => this.handleToggle(event)}
                defaultToggled={this.state.toggle1}
              />
            </div>
            <div className="search-books-togle-box">
              <Toggle
                id="toggle2"
                label="Computers"
                style={styles.toggle}
                toggled={this.state.toggle2}
                onToggle={(event) => this.handleToggle(event)}
                defaultToggled={this.state.toggle2}
              />
            </div>
            <div className="search-books-togle-box">
              <Toggle
                id="toggle3"
                label="Comics & Graphic Novels"
                style={styles.toggle}
                toggled={this.state.toggle3}
                onToggle={(event) => this.handleToggle(event)}
                defaultToggled={this.state.toggle3}
              />
            </div>

          </div>
          <ol className="books-grid"></ol>
          <ListBooks
            title='Books Researched'
            lstBooks={this.state.books}
            onSelectChangeBook={this.props.onSelectChangeBook}
          />
        </div>
      </div>
    )
  }
}

export default BookSearch;