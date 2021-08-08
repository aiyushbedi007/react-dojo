import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [name, setName] = useState('Ashu');
    const [age , setAge] = useState(26)

    const handleclick = () => {
        setName('Sallo');
        setAge(18);
    }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    return ( 
       <div className="home">
          <h2>Homepage</h2>
          <p>{name} is {age} years old</p>
          <button onClick={handleclick}>Change Name</button> 
         <BlogList blogs={blogs} title="All bLogs" />
       </div> 
     );
}
 
export default Home;