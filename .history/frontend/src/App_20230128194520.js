import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Register';
import Register from './pages/Register';
import Register from './pages/Register';
import Register from './pages/Register';

const router = createBrowserRouter([
  { path: "/", element: <div> Home</div> }, 
  { path: "/register", element: <Register/> }, 
  { path: "/login", element: <div> Login</div> }, 
  { path: "/post", element: <div> Post</div> }, 
  { path: "/createpost", element:<div>Create Post</div>}, 
]);
function App() {
  return (
    <div className="App">
      
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
