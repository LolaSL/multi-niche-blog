import React from 'react'

const Login = () => {

    return (
        <Container className="form-container">
          <h1 className="font-weight-light display-1 text-center">Log In</h1>
            <Form
                // onSubmit={(e) => onSubmit(e)}
            >
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
            //  onChange={(e) => onChange(e)}
             type='email'
             className='form-control'
             id='email'
             name='email'
            //  value={values.email}
             placeholder='email'
             required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
        //   onChange={(e) => onChange(e)}
          type='password'
          value={values.password}
          className='form-control'
          id='password'
          name='password'
          placeholder='password'
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

export default Login