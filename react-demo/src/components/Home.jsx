import Message from './Class.jsx';

function Home({ title }) {
    return (
        <>
            <div className="home">
                <h1>{title}</h1>

                <p>This is a Landing page </p>
                <Message/>
            </div>
        </>
    )

}

export default Home;


