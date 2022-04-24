import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { BookDetails } from '../pages/book-details.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'


export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => this.setState({ books }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    onSelectBook = (bookId) => {
        bookService.getById(bookId)
            .then(book => this.setSelectedBook(book))
    }

    onUnSelectBook = () => {
        this.setSelectedBook(null)
        this.loadBooks()
    }

    onRemoveBook = (bookId) => {
        bookService.remove(bookId)
            .then(() => {
                this.setSelectedBook(null)
                this.loadBooks()
            })
    }


    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    render() {
        const { books, selectedBook } = this.state

        return (
            <section className="book-app">
                {!selectedBook && <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookList onSelectBook={this.onSelectBook} books={books} />
                </React.Fragment>
                }
                {selectedBook &&
                    <BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook} onRemoveBook={this.onRemoveBook} />
                }
            </section>
        )
    }
}