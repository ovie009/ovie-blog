const Home = () => {
    // where e is equal to the event object
    const handleClick = (e) => {
        console.log('Hello, Ninja', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello, '+name+'Target Event: '+e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button> <br />
            <button onClick={(e) => handleClickAgain('Ovie', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;
