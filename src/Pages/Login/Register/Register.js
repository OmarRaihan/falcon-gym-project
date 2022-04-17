import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className="text-center mb-3">Please SignIn</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className="w-100" variant="danger" type="submit">
          Sign In
        </Button>
      </Form>
      <p className="mt-2">Already have an account? <Link to="/login" className="text-danger text-decoration-none pe-auto" onClick={navigateLogin}>Please Login</Link></p>
    </div>
  );
};

export default Register;
