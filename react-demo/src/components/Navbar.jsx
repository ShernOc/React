import {Link} from 'react-router-dom';


function NavBar() {
// Array of nav links 
    const links = ["home", "about", "books"];
  
    return <nav>{/* display an <a> tag for each link here */}
    <Link  to="./home" key={links.home} >Home </Link>
    <Link to ="./about" key={links.about} >About</Link>
    <Link to="./booklist" key={links.books} >Books</Link>
    </nav>;
  }
  
  export default NavBar;
  