import Home from './Home.jsx'
import About from './About.jsx';
import { Profile } from './Gallery.jsx';
import Desprop from './Desprop.jsx';

export default function App(){
    const classLink = {
        school: "https://www.w3schools.com/js/js_loop_for.asp",

        git: "https://github.com/",
    };

return (
    <> 
    <Home user = "Liza is a Web Developer from New York"/>
    <About 
    github="https://www.w3schools.com/js/js_loop_for.asp" 
    linkedin ="https://www.w3schools.com/js/js_loop_for.asp" />
    <Desprop life = {classLink} />
    <Profile/>
    </>
)
}
