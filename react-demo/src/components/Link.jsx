
function Link({ linkedin, github }) {
    return (
        <>
            <h2>Links Used Rendered as Props</h2>
            <p>
                1. <a href={github} target="_blank">{github}</a>
                <br />
                2. <a href={linkedin} target="_blank">{linkedin}</a>
            </p>
        </>
    )
}

export default Link;