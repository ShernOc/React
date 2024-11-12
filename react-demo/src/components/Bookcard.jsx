
// This components will show how we want the Bookcard to be displayed. 

// Now pass the books props at the Bookcard as an argument 
function BookCard({ imagelink, title, author, pages, link }) {

    return (
        <>
            {/* Going to render the bookCard of how its going to show*/}
                <div className="bookcard">
                <img src={imagelink} alt="book image" />
                <h2>Title: {title}</h2>
                Author:{author}
                <br />
                <span className="pages"> Pages:{pages}</span>
                <br />
                <a href={link} target="_blank">Book link</a>
                <br />
                <button id="buy">Buy</button>
                <br />
                <button id="delete">Delete</button>
                </div>

        </>
    )
}

export default BookCard;