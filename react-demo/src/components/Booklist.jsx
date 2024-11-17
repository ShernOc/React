import BookCard from "./Bookcard.jsx";

// This is a function component shows how the js functionality of what needs to be displayed. 
// It will hold the book object. 

// We are going to now render the book card. 
function Booklist({ books }) {
    //EVENT HANDLER for HandleChange for the Input Values, 
    function handleChange(e) {
        console.log(`${e.target.name}:${e.target.value}`);
    }

    const bookCard = books.map(book => {
        return (
            <BookCard key={book.id} imagelink={book.imagelink} title={book.title} author={book.author} pages={book.pages} link={book.link} />)
    }
    );


    return (
        //We are going to now return {Bookcard} in the div tag. 
        <>
            <div className="example-list">
                <h1>Book Collection</h1>
                {/* <div id="input">
                <label htmlFor="input">Book Name:</label>
                <input type="text" placeholder="type a book" onChange={handleChange}/>
                <button onClick={()=>{console.log("Hey thats a button")}}></button>
               
                <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
       </select>
       </div> */}

                <div id="addbooks">
                    <form action="">
                        <label htmlFor="title">Title:</label>
                        <input type="text" placeholder="add a title" />
                        <br />
                        <label htmlFor="pages">Pages</label>
                        <input type="number" />
                        <br />
                        <label htmlFor="booklink">Book-link</label>
                        <textarea name="booklink" id="booklink"></textarea>
                        <br />
                        <button type="submit">Add book</button>
                    </form>
                </div>
                {/* render BookCard components here */}
                {bookCard}
            </div>
        </>
    )

}

export default Booklist;