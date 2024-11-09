

function Props(prop){
    return(
        <>
        {prop.title}
<p>We have been passing information/data from the Child Components to the Parent Component. Now the question is how do we Pass or transfer the information from the Parent to the child components ? 
Well here is where the PROPS comes in. 

<b>PROPS:</b> are arguments that allows us to pass information from parent component down to a child component: 
PROPS holds the information that we need to pass. And this can be done by: 
<li><b>Passing props to child component</b></li> 
<li><b>Read/pass the props as arguments inside the child component. and use it as a Variable. </b></li> 

Let&apos;s Assume that we have App react function that returns Props component with the title  (Props title = &quot;WHAT ARE PROPS?: displayed as a prop &quot;. )
Our goal is to pass the title header to the Header components itself. This is where props comes in. 

At the Header function we are going to PASS PROPS as the argument, and also we are going to name the props like so: props.title. To now pass the props, we have pass it as an argument and to display it we have to return it, and to enclose it/ wrap it in a curly braces ({prop.display})

{/* /* {Header(props){
  return(
    <>
    {props.title} 
    </>
  )
  
} }*/ }

2. Read props inside the child component and use it as a Variable. 
This is done by taking the name of the prop and wrapping it in curly braces and pass it as an argument in the function. 
eg: function Header(title):Now you can use them inside the Header component. like a variable. 
nb: Also do not miss the pair of {} curlies inside of ( and ) when declaring props:

: <a href="https://react.dev/learn/passing-props-to-a-component">(Nb from React source</a>
<b>props are the only argument to your component! React component functions accept a single argument, a props object.)
</b>
<br />
Am not sure about you but learning about props, is just exciting: You can now use variable, transfer/pass information and there is no need to import the entire data of a component. You create and pick what you need to use. 
</p>

</>
    )
}

export default Props;