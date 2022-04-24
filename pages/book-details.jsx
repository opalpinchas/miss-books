


export function BookDetails({ book, onUnSelectBook, onRemoveBook }) {
    const price = book.listPrice.amount
    const currencySymbol = getCurrencySymbol(book.listPrice.currencyCode)
    const priceColor = (price < 20) ? 'green' :
        (price > 150) ? 'red' : '';
    const pageStr = (book.pageCount < 100) ? '(Light Reading)' :
        (book.pageCount > 500) ? '(Long reading)' :
            (book.pageCount > 200) ? '(Decent Reading)' : '';
    const yearDiff = (new Date).getFullYear() - book.publishedDate
    const yearStr = (yearDiff > 10) ? '(Veteran Book)' :
        (yearDiff < 1) ? '(New!)' : '';

    function getCurrencySymbol(currencyCode) {
        switch (currencyCode) {
            case "EUR":

                return "€";
            case "ILS":

                return "₪";
            case "USD":

                return "$";
        }
    }

    return (
        <section className="book-details">
            <header>
                <h2>{book.title}</h2>
                <h3>{book.subtitle}</h3>
            </header>
            <section className="details-area">
                <h3>Authors: {book.authors}</h3>
                <h3>Published Year: {book.publishedDate} {yearStr}</h3>
                <h3>Categories: {book.categories.join(' ')}</h3>
                <h3>Price: <span className={priceColor}>{price}</span> {currencySymbol}</h3>
                <h3>Language: {book.language}</h3>
                <h3>Page Count: {book.pageCount} {pageStr}</h3>
                <p>{book.description}</p>
                <section className="btn-area">
                    <button onClick={onUnSelectBook}>Close</button>
                    <button onClick={() => onRemoveBook(book.id)}>Delete</button>
                </section>
            </section>
            <div className="img-container">
                <img src={book.thumbnail} />
            </div>
            {book.listPrice.isOnSale && <div className="sale-box">SALE!</div>}
        </section>
    )

}
