// - Partiamo installando React Router DOM: npm install react-router-dom
// - Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina 
// con la lista dei post
// - Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro


import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Posts from "./pages/Posts"
import SinglePost from "./pages/SinglePost"




function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/posts" Component={Posts} />
          <Route path="/posts/:id" Component={SinglePost} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
