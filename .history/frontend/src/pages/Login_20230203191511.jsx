import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { onLogin } from "../apis/auth";
// import { useDispatch } from "react-redux";
// import { authenticateUser } from "../redux/slices/authSlice";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.input });
  };
  const { login } = useContext(AuthContext);
  // const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // await onLogin(inputs);
      await login(inputs);
      dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
      navigate(redirect || "/");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Container className="small-container border shadow mt-4">
      <h1 className="font-weight-light display-1 form-title text-center mt-4">
        Log In
      </h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
            name="email"
            //  value={inputs.email}
            placeholder="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            type="password"
            // value={inputs.password}
            className="form-control"
            id="password"
            name="password"
            placeholder="password"
            required
            autoComplete="current-password"
          />
        </Form.Group>
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div className="mb-3">
          <Button type="submit">Login</Button>
        </div>
        <div className="mb-3">
          New User?{" "}
          <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
