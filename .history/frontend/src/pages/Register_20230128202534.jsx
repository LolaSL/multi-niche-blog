<Container className="container">
<div>
  <h1 className="font-weight-light display-1 text-center">Register</h1>
</div>
<Form onSubmit={(e) => onSubmit(e)}>
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
      value={values.email}
      placeholder='Email'
    />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control
    onChange={(e) => onChange(e)}
    type='password'
    value={values.password}
      placeholder='Password'
      className='form-control'
      id='password'
      name='password'
    required
     autoComplete="new-password"
    />
 
  </Form.Group>
  <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
  <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>
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
