import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
const Layout = () => {
  return(
    <>
    <Navbar />
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
      { path: "/post", element: <Post /> },
      { path: "/createpost", element: <CreatePost /> },
    ]
   
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },

  
]);

function App() {
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}




export default App;
