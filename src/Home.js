import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [name, setName] = useState('Ashu');
    const [age , setAge] = useState(26)

    const handleclick = (e) => {
        setName('Sallo');
        setAge(18);
        console.log(e.target);
    }

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok){
            throw Error('#404 could not fetch data');
          }
          return res.json();
        })
        .then(data =>{
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err =>{
          setIsPending(false);
          setError(err.message);
        })
    },[]);

    return ( 
       <div className="home">
          <h2>Homepage</h2>
          <p>{name} is {age} years old</p>
          <button onClick={handleclick}>Change Name</button>
          {error && <div>{error}</div>}
          {isPending && <div>Loading.....</div>} 
          {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
          {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" handleDelete={handleDelete} />}
       </div> 
     );
}
 
export default Home;