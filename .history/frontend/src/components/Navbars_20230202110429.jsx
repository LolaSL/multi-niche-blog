import React from "react"; // { useContext }
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.PNG";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { isAuth } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux';


const Navbars = () => {
  //   const { currentUser, logout } = useContext(AuthContext);
const {isAuth} = useDispatch()
  return (
    <Navbar className="navbar nav" expand="lg">
      <Container className="container">
        <Navbar.Brand className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-image" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mb-4" />
        <Navbar.Collapse id="basic-navbar-nav" className="links me-auto w-100 justify-content-end">
            <div>
              <Link className="link" to="/?cat=art">
                <h6>ART</h6>
              </Link>
            </div>
            <div>
              <Link className="link" to="/?cat=science">
                <h6>SCIENCE</h6>
              </Link>
            </div>
            <div>
              <Link className="link" to="/?cat=technology">
                <h6>MUSIC</h6>
              </Link>
            </div>
            <div>
              <Link className="link" to="/?cat=cinema">
                <h6>CINEMA</h6>
              </Link>
            </div>
            <div>
              <Link className="link" to="/?cat=design">
                <h6>DESIGN</h6>
              </Link>
            </div>
            <div>
              <Link className="link" to="/?cat=food">
                <h6>FOOD</h6>
              </Link>
            </div>
            <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <div>
              <Link className="link" to="/login">
                Login
              </Link>
            </div>
            {/* )} */}
            <span className="create mt-2">
              <div>
                <Link className="link" to="/createpost">
                  Create
                </Link>
              </div>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
