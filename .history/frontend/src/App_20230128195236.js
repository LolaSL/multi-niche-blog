import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/", element: 
    <Navbar/>
  <Home />
    <Footer/>
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/post", element: <Post /> },
  { path: "/createpost", element: <CreatePost /> },
]);

function App() {
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
