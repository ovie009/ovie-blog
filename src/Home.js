import { useState, useEffect } from "react";
import Bloglist from './Bloglist'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        let newBlog = blogs.filter((blog) => blog.id !== id);

        setBlogs(newBlog);
    }

    // use effect is used to fire a function after every render
    useEffect(() => {
        console.log('use effect ran');
    })

    return ( 
        <div className="home">
            {/* passing props */}
            <Bloglist blogs={blogs} title='All blogs' handleDelete = {handleDelete}/>
            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title='Mario's/> */}
        </div>
    );
}
 
export default Home;
