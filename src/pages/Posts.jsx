import NavBar from "../components/NavBar"
import { useEffect } from "react"
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

const Posts = () => {

    // const [posts, setPosts] = useState([]);

    const {posts, fetchPosts} = useGlobalContext()

    useEffect(() => {

        fetchPosts()

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