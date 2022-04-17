import React from "react";
import google from "../../../images/social/google-logo.png";
import facebook from "../../../images/social/facebook-white-circle.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "0.5px" }} className="bg-secondary w-50"></div>
        <p className="px-3 mt-3">OR</p>
        <div style={{ height: "0.5px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}

      <div className="text-center my-2">
        <button onClick={() => signInWithGoogle()} className="btn btn-dark rounded-pill w-100">
          <img className="me-1" style={{ width: "28px" }} src={google} alt="" />
          Google
        </button>
      </div>

      <div className="text-center mb-2">
        <button className="btn btn-primary w-100 rounded-pill px-4">
          <img className="me-1" style={{ width: "26px" }} src={facebook} alt="" />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Social;
