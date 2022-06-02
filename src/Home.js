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
    // useEffect(() => {
    //     console.log('use effect run at all render');
    // })
    
    // a second variable can be passed into useEffect
    // which is known as a dependency
    // it can be used to decide if useEffecet should be triggered after a certain render 
    
    // run after first render only
    // useEffect(() => {
    //     console.log('use effect first render');
    // }, []) //passsing an empty array
    
    const [name, setName] = useState('Mike');
    
    const handleName = () => {
        setName('Josh');
    }
    // run at first render and if name state is changed
    useEffect(() => {
        console.log('name state was changed');
    }, [name]) //passsing an empty array

    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title='All blogs' handleDelete = {handleDelete}/>

            <p>Reviewed by {name}</p>

            <button type="button" className="change-reviwer" onClick={handleName}>Change Reviewer</button>
        </div>
    );
}
 
export default Home;
