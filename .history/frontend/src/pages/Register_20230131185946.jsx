import React from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      
    try {
      const { data } = await onRegistration(values)
      setError('')
      setSuccess(data.message)
      setValues({ email: '', password: '' })
      navigate(redirect || "/");
    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
  }

  return (
    <Container className="small-container">
    <div>
      <h1 className="registration-title font-weight-light display-1 text-center">Register</h1>
    </div>
          <Form
              onSubmit={(e) => onSubmit(e)}
          >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e)}
          value={values.name}
          id='email'
          name="name"
          placeholder='Name'
          className='form-control'
          required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e)}
          type="email"
          required
          id='email'
          name='email'
          className='form-control'
        //   value={values.email}
          placeholder='Email'
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control
        // onChange={(e) => onChange(e)}
        type='password'
        // value={values.password}
          placeholder='Password'
          className='form-control'
          id='password'
          name='password'
        required
         autoComplete="new-password"
        />
     
      </Form.Group>
      <div style={{ color: 'red', margin: '10px 0' }}>Error</div>
      <div style={{ color: 'green', margin: '10px 0' }}>Success</div>
      <div className="mb-3">
        <Button type="submit">Register</Button>
      </div>
      <div className="mb-3">
        Already have an account?{" "}
        <Link to={`/login?redirect=${redirect}`}>Log-In</Link>
      </div>
    </Form>
  </Container>
);
};

export default Register;
