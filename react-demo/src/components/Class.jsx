import { Component } from "react"
// This is a Class component
class Message extends Component{
    constructor(props){
        super(props)
        this.state = {

            message:"Welcome to useState Hook",
// initialize the count to 0. 
            count:0
        }
    }


    // create a function that holds the new Message When a button is clicked and now it uses the state 
    // The function accepts an Object
    // This function is going to be the event-handler that will be passed to the button once it's clicked 
    changeMessage(){
    
        this.setState({
            message:"Yah You pressed the Button and now this Message is being rendered"
        })
    }
    
    // event handler for the count message that will increase the message by one 
    increment(){
        this.setState({
            count:this.state.count +5}, 
            // this is a callback function 
            ()=>{
                
            console.log("Callback value", this.state.count)
        }
    )
    console.log(this.state.count)
}

    render(){
        return(
            <>
            <div>
                <h1>THE STATE HOOK</h1>
                <p>We want to have a button when clicked it changes the text from Welcome to UseState Hook  toYah You pressed the Button and now this Message is being shown . <br />
                To have that we have to create a useState Hook. Create a button that will hold the event handler.</p>

        {/* We are now going to show the message is the state function */}
        {this.state.message}
            <button onClick={()=> this.changeMessage()}>Click me</button>


            <h2>Counter = {this.state.count}</h2>
            {/* button for the for the count value value  */}

            <button onClick={()=>this.increment()}>Increment Button</button>            
            </div>
            </>
        )
    }

}

export default Message;