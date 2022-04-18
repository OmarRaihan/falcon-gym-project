import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const handleCheckoutForm = (event) => {
    event.preventDefault();
  };

  const handleCheckout = async () => {
    toast("Thank you for the booking");
  };

  return (
    <div className="container w-50 mx-auto my-5">
      <h4 className="my-3 text-center">Please Checkout Your Service</h4>
      <Form onSubmit={handleCheckoutForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="address" placeholder="Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="phone" name="phone" placeholder="Phone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={handleCheckout} className="w-100" variant="danger" type="submit" value="Register">
          Checkout
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
