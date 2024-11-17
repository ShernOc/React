import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx'
import NavBar from "./Navbar.jsx";
import About from "./About.jsx";
import Booklist from "./Booklist.jsx";
import books from "./Books.jsx";
import Desprop from './Desprop.jsx';
import { Profile } from './Gallery.jsx';


import './App.css';
// import './small.json'



export default function App() {
    const classLink = {
        school: "https://www.w3schools.com/js/js_loop_for.asp",

        git: "https://github.com/",
    };

    return ( 
        <Router>
          <NavBar/>
            <Routes>   
                <Route path = "/home" element = {<Home title = "Home Page"/>} />
                <Route path = "/about" element = {<About // github,linkedin are props
                github="https://www.w3schools.com/js/js_loop_for.asp"
                linkedin="https://github.com/"/>}/>

                <Route path="/booklist" element = {<Booklist books={books}/>}/>
                <Route path='/profile' element = {  <Profile />} />
                {/* The Desprop is showing the two links */}
           <Route element = { <Desprop life={classLink} id ="desprop"/> } />

            </Routes>

        </Router>
    )
}
