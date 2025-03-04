import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../contexts/GlobalContext";


const SinglePost = () => {
    const { id } = useParams()

    // const [singlePost, setSinglePost] = useState({})

    const {singlePost, fetchSinglePost} = useGlobalContext()


    useEffect(() => {
        // fetch(`http://localhost:3000/api/posts/${id}`)
        //     .then((res) => res.json())
        //     .then(setSinglePost)

        fetchSinglePost(id)

    }, [])

    return (
        <>
            <NavBar />
            <div>
                {
                    <div>
                        <h3>{singlePost.title}</h3>
                        <p>{singlePost.content}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default SinglePost