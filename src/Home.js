import { useState } from "react";
import Bloglist from './Bloglist'

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return ( 
        <div className="home">
            {/* passing props */}
            <Bloglist blogs={blogs} title='All blogs'/>
            <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title='Mario's/>
        </div>
    );
}
 
export default Home;
