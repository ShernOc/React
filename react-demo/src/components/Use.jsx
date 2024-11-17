import { useState } from "react";

// Function that when a button is clicked it changes the message from Sherlyne to Maluki 

// const [theValue, setValue] = useState(initial value)
// const is what stores the values. 
// setValue is a function that will be used later 
// useState(put the initial value )
function Use(){

    const[value,setValue]= useState("Sherlyne")
    // Initial Value is Sherlyne 

//event handler for the work 
function changeName(){
    name:"Sherlyne"; 

}
    return(

        <div>
            <h1>useState Hook </h1>

            <p>Created a button that changes the Name form Sherlyne to Maluki 
            </p>

            <h2>{name}</h2>

            <button onClick={changeName}>Click Me</button>

        </div>
    )

}

export default Use;