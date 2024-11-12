import BookCard from "./Bookcard.jsx";

// This is a function component shows how the js functionality of what needs to be displayed. 
// It will hold the book object. 

// We are going to now render the book card. 
function Booklist({ books }) {

    const bookCard = books.map(book => {
        return (
            <BookCard key={book.id} imagelink={book.imagelink} title={book.title} author={book.author} pages={book.pages} link={book.link} />)
    }
    );
    return (
        //We are going to now return {Bookcard} in the div tag. 
        <>
            <div className="booklist">
            <h1>Book Collection</h1>
                {/* render BookCard components here */}
                {bookCard}
            </div>
        </>
    )

}

export default Booklist;