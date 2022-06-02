import { useState, useEffect } from "react";
import Bloglist from './Bloglist'

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);
    // run at first render and if name state is changed
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                setBlogs(data);
                setIsPending(false);
            });
        }, 1000);
    }, []) //passsing an empty array

    return ( 
        <div className="home">
            {isPending && <div className="loading">loading...</div> }
            {blogs && <Bloglist blogs={blogs} title='All blogs'/>}
        </div>
    );
}
 
export default Home;
