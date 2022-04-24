
export function BookPreview({ book, onSelectBook }) {


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

    return <section className="book-preview" onClick={() => onSelectBook(book.id)}>
        <h2>{book.title}</h2>
        <div className="img-container">
            <img src={book.thumbnail} />
        </div>
        <h3>Price: {book.listPrice.amount} {getCurrencySymbol(book.listPrice.currencyCode)}</h3>
    </section>
}





