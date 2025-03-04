import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch("http://localhost:3000/api/posts")
            .then((res) => res.json())
            .then(setPosts)
    }

    const [singlePost, setSinglePost] = useState({})

    const fetchSinglePost = (id) => {
        fetch(`http://localhost:3000/api/posts/${id}`)
            .then((res) => res.json())
            .then(setSinglePost)
    }

    const value = {
        posts,
        fetchPosts,
        singlePost,
        fetchSinglePost
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export {GlobalProvider, useGlobalContext};
