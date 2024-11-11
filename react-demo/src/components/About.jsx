import Link from "./Link";

// This is a default prop : bio ="This is a default" 
function About({ bio ="This is a default" , linkedin , github }){
     const display = {bio}


    return (
        <>
        <h2>About</h2>
        {display? <p> {bio} </p>:null} 

        {/* <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /> */}

        <Link  linkedin={linkedin} github={github} />

        </>  
    )
    
    // // About.protoTypes = {
    //     bio:protoTypes.string.isRequired
    //  }
   
}
  
export default About;