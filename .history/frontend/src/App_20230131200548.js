import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import NotFound from ''

const Layout = () => {
  return (
    <>
      <Navbars />
      <Outlet />
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
      { path: "/notfound", element: <NotFound /> },
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
