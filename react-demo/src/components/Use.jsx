/*State = state is a data that is dynamic and can change during the components life. 
State */

import { useState } from "react";

// Create a Function that when a button is clicked it changes the message from Sherlyne to Maluki 

// const [theValue, setValue] = useState(initial value)
// const is what stores the values. 
// setValue is a function that will be used later 
// useState(put the initial value )
function Use(){
    // Initial Value is Sherlyne 
    const[value,setValue]= useState(false)
    const color = value? "red":"maroon"; 


//event handler for the work 
// set when the button is clicked the value will change from Sherlyne to Maluki 
function changeName(){
    setValue((value) => !value)
}
    return(

        <div>
            <h1>useState Hook </h1>

            <p>Created a button that changes the Name form Sherlyne to Maluki 
            </p>

            {/* we have added the styling on the React components too  */}
            <h2  style={{color:color}}>{value?"Maluki":"Sherlyne"}
            </h2>
        
            <button onClick={changeName}>Click Me</button>

        </div>
    )

}

export default Use;