
function Link({linkedin , github }){


    return(
        <>
        <h3>Links</h3>
        <p>
        <a href={github}>Linkedin </a>
        <br />
        <a href={linkedin}>github</a>
        </p>
        </>
    )
}

export default Link;