import React from "react";
import Container from "react-bootstrap/Container";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="container text-center pt-4">
      <div id="error-page">
        <h1 className="text-danger font-weight-light display-1 pt-4 mb-6">
          Oops! 404 Page not found...
        </h1>
        <p className="text-danger pt-4 mb-6">
          Sorry, an unexpected error has occurred.
        </p>

        <p>Here are some helpful links:</p>
        <Navigate to="/">Home</Navigate>
        <Navigate to="/login">Blog</Navigate>
      </div>
    </Container>
  );
};

export default NotFound;
