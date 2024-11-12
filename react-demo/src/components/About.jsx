import Link from "./Link";

// This is a default prop : bio ="This is a default" 
function About({ bio = "Welcome to my blog! Am writing this blog as a platform to share my experience and progress as i learn to code, to be specific learning React. I believe that that everyone has a way of grasping information and for me writing/recapping is the solution. " , linkedin, github }) {
    
    const display = { bio };

    return (
        <>
        <div className="about">
            <h1>About Page</h1>
            {display ? <p> {bio} </p> : null}

            {/* <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /> */}
            <br />

            <Link linkedin={linkedin} github={github} />
            
        </div>
        </>
    )


}

export default About;