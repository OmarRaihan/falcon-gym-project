import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () =>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent Email');
  }

  return (
    <div className="container w-50 mx-auto my-5">
      <h3 className="text-center mb-3">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button className="w-100 mb-1" variant="danger" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="my-2">
        New to World Gym?
        <Link to="/register" className="text-danger text-decoration-none pe-auto ms-1" onClick={navigateRegister}>
          Please SignIn
        </Link>
      </p>
      <p>
        Forget Password?
        <Link to="/register" className="text-primary text-decoration-none pe-auto ms-1" onClick={resetPassword}>
          Reset Password
        </Link>
      </p>
      <Social></Social>
    </div>
  );
};

export default Login;
