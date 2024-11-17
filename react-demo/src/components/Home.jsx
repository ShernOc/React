import Message from './Class.jsx';
import Use from './Use.jsx';
import Use2 from './Use2.jsx';

function Home({ title }) {
    return (
        <>
            <div className="home">
                <h1>{title}</h1>

                <p>This is a Landing page </p>
                <Message/>
                <Use/>
                <Use2/>
            </div>
        </>
    )

}

export default Home;


