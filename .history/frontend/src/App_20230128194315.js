import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <div>Hello Home</div> }, 
  { path: "/register", element: <div>Hello Register</div> }, 
  { path: "/login", element: <div>Hello Login</div> }, 
  { path: "/post", element: <div>Hello Home</div> }, 
  { path: "/createpost", element:<div>Hello Home</div>}, 
]);
function App() {
  return (
    <div className="App">
      
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
