

// import { useState } from "react";
//This page shows how our Pages will be looking like. 
function HomeChild({ title,children }) {

    return (
        <>
        <div className="home">
        <h1> {title} </h1>

        <section>
            {children}
        </section>
        </div>
        </>
    )
}

export default HomeChild;
