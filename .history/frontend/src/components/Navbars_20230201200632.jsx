import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../img/logo.PNG";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { onLogout } from "../apis/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const logout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth", "userInfo");
      window.location.href = "/login";
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Navbar className="navbar nav" expand="lg">
      <Container className="container">
        <Navbar.Brand className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-image" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mb-4" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="links me-auto w-100 justify-content-end"
        >
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
          <span>{isAuth?.name}</span>
          {isAuth ? (
            <Link className="link"   to={`/?redirect=${redirect}`}onClick={() => logout()}>Logout</Link>
          ) : (
            <div>
              <Link to={`/login?redirect=${redirect}`} > Login</Link>
            </div>
          )}
          <span className="create mt-2">
            <div>
              <Link to={`/createpost?redirect=${redirect}`}>Create</Link>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
