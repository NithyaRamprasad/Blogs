import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs}) =>{
    const [searchText,setSearch] = useState('');

    const handleDelete = (id) => {
        fetch('http://localhost:8000/blogs/'+ id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    };

    return (
        <div className="home">
            <input 
                type="text" 
                value={searchText}
                onChange={(e) => setSearch(e.target.value.toLowerCase())} 
                placeholder="Search">
            </input>
            {blogs.map((item) => (
                <div key={item.id}>
                {(item.author.toLowerCase().indexOf(searchText) !== -1 || item.title.toLowerCase().indexOf(searchText) !== -1 || item.body.toLowerCase().indexOf(searchText) !== -1) &&
                    <div className='blog-preview' key={item.id}>
                        <Link to={`/blogs/${item.id}`}>
                            <h2>{item.title}</h2>
                            <p>{item.body.substring(0, 70)}...</p>
                            <p>Written By : {item.author}</p>
                        </Link>
                        {sessionStorage.getItem('userName') === item.author && <button onClick={() => handleDelete(item.id)}>Delete</button>}
                    </div>
                }
                </div>
            ))}
        </div>
    );
}

export default BlogList;