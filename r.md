React 
- is a JS library framework.
- It helps Organize, Structure, separates the codes based on Functionality, and its easy to read. 
- It helps Organize,Reuse and Maintain the code. 

Key features of React is that its
1. Declarative - What should the program accomplish. (What am i supposed to do? )
2. Component Based- There is structure/ and building blocks that handles their own data and UI logic. eg, Navbar, AddList, User Input, all in component form 
-Its like THINKING IN PIECES. 
3. Learn Once,Write Anywhere- 

A. REACT INSTALLATION
1. npm install --global npm 
-  installs and updates the node.js packages. 
2. package.json- file holds and tells npm what packages are required for JS application. 
-npm install: downloads the packages needed for the application 
npm-init- allows us to create package.json file. 

1. Get into the directory/folder
2. In the terminal type: npm create vite@latest
3. Name the project-
4. Select the frame work: REACT 
5. Select the variant: Javascript
6. cd my-react-app 
7. npm install 
8. npm run dev: to start the development server 
9. copy the url address that directs you to the server/website. 
10. To start the development server type npm run dev in the terminal. 

B. FILES: 
1. index.html: The entry point of the program
1. index.js/index.jsx: The entry point of the application/ or the react app. Sets up the ReactDOM : for rendering the app 
2. app.js/jsx : The backbone/framework/The layout of how the layout of the applications/website should look like. it has both JSX/HTML code syntax mixed together. 
3. App.css : styles the specific app.js components 
4. index.css: its the Global CSS style that applies to the entire application. 


resource: https://medium.com/nerd-for-tech/understanding-the-key-files-in-a-react-app-1729391ce88b


C. React Components
React Function Components: This is how the layout looks like 
import from Comments './Comments'
function App(){
    return (
        <>
        <Comments/>
        </>
    )

}

export default App; 

D. Import/Export of Components
- The import and export makes it more possible to reuse/and access the files throughout the project 
1. Export: 
  - export default is used once per file (export default App)

  You can have export a named export function eg; 
  export function Profile() {
  // ...
}
- You can also import multiple components from the same file: 

- Then, import Profile from Gallery.js to App.js using a named import (with the curly braces):

- import { Profile } from './Gallery.js';

2. Import: 
helps to access the file, or the function and use them in other files or components. 
  - One has to write the relative path of the file we are retrieving : 
  import Gallery from './Gallery'; 
  Either './Gallery.js' or './Gallery' will works with React,


E. JSX rules
1. Return a multiple elements wrapped into a single tags: ( <div><h2>Life is good </h2></div> or <></> : empty fragment tag )
2. Close all the tags: 
in Html:  <input type="text"> while in JSX its: <input type="text" /> : all tags must be closed. 
3. Write things in Camelcase( ClassName = "photo")
4. You can use tools like: https://transform.tools/html-to-jsx
to convert the HTML to JSX file. 

9/11/2024
We have been passing information/data from the Child Components to the Parent Component. Now the question is how do we Pass or transfer the information from the Parent to the child components ? 
Well here is where the PROPS comes in. 

PROPS: are arguments that allows us to pass information from Parent component down to a child component: 
PROPS holds the information that we need to pass. And this can be done by: 
1. Passing props to child component
2. Read/pass the props as arguments inside the child component. and use it as a Variable. 

Let's Assume that we have App() react function that returns Props component with the title  <Props title = "WHAT ARE PROPS?: displayed as a prop "/>. 
Our goal is to pass the title header to the Header components itself. This is where props comes in. 

At the Header function we are going to PASS PROPS as the argument, and also we are going to name the props like so: props.title. To now pass the props we have pass it as an argument and to display it we have to return it, and to enclose it or wrap it in a curly braces {props.title}. 

Header(props){
  return(
    <>
    {props.title} 
    </>
  )
  
}

2. Read props inside the child component and use it as a Varianble. 
This is done by taking the name of the prop and wrapping it in curly braces and pass it as an argument in the function. 
eg: function Header({title}):Now you can use them inside the Header component. like a variable 



  <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
Blog
But seriously why would pass info to the child and not the child passing to the 


11/11/2024 
DESTRUCTURING
To continue on with props, there is something called destructuring. To me destructuring to me is like breaking down so that the code can be easier to read. Example (Movie name = "Sherlyne") that is passed on to Movie components. At the Movie components we pass {props.name} object as an argument. However w now can omit the prop and just allow to only pass the {name} also we can include many object passed into a function: eg {name,birth,bio} this are all props destructuring. To now apply one can use the props such as : I should be named {name}. 





