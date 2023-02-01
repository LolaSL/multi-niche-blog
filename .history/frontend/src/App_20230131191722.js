import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Post from './pages/Post.jsx';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return(
    <>
    <Navbars />
    <Outlet/>
    <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Post /> },
      { path: "/createpost", element: <CreatePost /> },
      { path: "/notfound", element: <CreatePost /> },
    ]
   
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="App">
      <Container className="container">
             <RouterProvider router={router}></RouterProvider> 
</Container>


    </div>
  );
}




export default App;