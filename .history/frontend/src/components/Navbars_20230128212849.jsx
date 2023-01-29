import React
// { useContext }
    from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.PNG";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";




const Navbars = () => {
//   const { currentUser, logout } = useContext(AuthContext);

  return (
    <Navbar className="navbar">
      <Container className="container">
        <Navbar.Brand className="logo">
          <Link to="/">
        <img src={Logo} alt="" className="logo-image" />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="links">
        <Nav className="me-auto w-100 justify-content-end">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>MUSIC</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : ( */}
            <Link className="link" to="/login">
               Login
            </Link>
          {/* )} */}
          <span className="create">
            <Link className="link" to="/createpost">
               Create
            </Link>
            </span>
            </N
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;