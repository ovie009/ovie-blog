import { useState } from "react";

const Home = () => {
    // let name = 'Ovie'; // unreactive variable

    const [name, setName] = useState('Spencer'); // reactive variable
    const [age, setAge] = useState(24); // reactive variable

    const handleClick = () => {
        // setName, function to change state of variable
        setName('Mike');
        setAge(27);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2> <br /><br />
            <p>{name} is {age} years old</p> <br /><br />
            <button onClick={handleClick}>Click Me</button> <br />
        </div>
    );
}
 
export default Home;
