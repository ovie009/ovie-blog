import { useState, useEffect } from "react";
import Bloglist from './Bloglist'

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    
    // run at first render and if name state is changed
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
    }, []) //passsing an empty array

    return ( 
        <div className="home">
            {blogs && <Bloglist blogs={blogs} title='All blogs'/>}
        </div>
    );
}
 
export default Home;
