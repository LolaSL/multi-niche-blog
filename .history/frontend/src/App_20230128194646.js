import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';


const router = createBrowserRouter([
  { path: "/", element: <div> Home</div> }, 
  { path: "/register", element: <Register/> }, 
  { path: "/login", element: <Log/> }, 
  { path: "/post", element: <Register/> }, 
  { path: "/createpost", element:<Register/>}, 
]);
function App() {
  return (
    <div className="App">
      
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
