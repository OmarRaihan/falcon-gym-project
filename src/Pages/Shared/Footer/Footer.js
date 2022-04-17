import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer style={{position: 'sticky', bottom: '0', width: '100%'}}>
      <div className="text-center">
        <p className="m-0 pt-4">Copyright &copy; All Rights Reserved</p>
        <p className="m-0 pt-2">{year}</p>
      </div>
    </footer>
  );
};

export default Footer;
