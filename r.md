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

5. 








