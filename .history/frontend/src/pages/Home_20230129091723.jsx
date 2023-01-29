import React from 'react';
import { Link, useLocation } from "react-router-dom";


const Home = () => {
  const cat = useLocation().search;

  const posts = [
    
  ]
  return (
    <div>Home</div>
  )
}

export default Home