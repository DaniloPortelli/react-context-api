import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/posts")
            .then((res) => res.json())
            .then(setPosts)

    }, [])

    return (
        <>
            <NavBar />
            <h1>Posts</h1>
            <div>
                {
                    posts.map((p) => {
                        return (
                            <NavLink to={`/posts/${p.id}`}>
                                <div key={p.id}>
                                    <ul>
                                        <li>{p.title}</li>
                                    </ul>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Posts