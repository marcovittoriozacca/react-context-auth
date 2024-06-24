import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Posts from "./pages/Posts"
import SinglePost from "./pages/SinglePost"
import NotFound from "./pages/NotFound"
import MainLayout from "./layouts/MainLayout"
import PostsByTag from "./pages/PostsByTag"
import Create from "./components/main/Create"
import { AuthProvider } from "./contexts/AuthContext"
import CheckAuth from "./middlewares/CheckAuth"
import Login from "./pages/Login"

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* general layout applied to all of our routes */}
          <Route path="/" element={<MainLayout/>}>

            {/* main route for the "/" url with component HomePage */}
            <Route index element={<HomePage/>}/>
              <Route path="login" element={<Login/>}/>

              <Route path={"create-post"} element={
                <CheckAuth>
                  <Create/>
                </CheckAuth>
              } />
                        
            {/* sub routes for posts */}
            <Route path="posts">
              {/* main page for the posts route */}
              <Route index element={<Posts/>}/>

              <Route path="tag/:id" element={<PostsByTag/>}/>

              {/* single post route with slug param */}
              <Route path=":slug" element={<SinglePost/>}/>
            </Route>

            {/* Not found component to handle the error 404 */}
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>    
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
