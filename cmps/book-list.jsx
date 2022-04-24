import { BookPreview } from './book-preview.jsx'


export function BookList({ books, onSelectBook }) {
    return <section className="book-list">
        {books.map(book => <BookPreview book={book} onSelectBook={onSelectBook} key={book.id} />)}
    </section>
}