import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <div>Hello Home</div> }, 
  { path: "/register", element: <div>Hello Home</div> }, 
  { path: "/login", element: <div>Hello Home</div> }, 
  { path: "/post", element: <div>Hello Home</div> }, 
  { path: "/create", element:<div>Hello Home</div>}, 
]);
function App() {
  return (
    <div className="App">
      
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
