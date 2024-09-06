import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
    <div className="cont footer">
      <div className="footer-l">
        <img className="footer-logo" src="/logo.svg" alt="logo" />
        <p className="footer-l-text m0">
          We the fastest growing recruitment and career advancement resources
          website in the Job sector for employees, recruiters, freelancers and
          job seekers.
        </p>
        <div className="footer-social-icons">
          <button className="f-si-btn">
            <i class="fa-brands fa-instagram"></i>
          </button>
          <button className="f-si-btn">
            <i class="fa-brands fa-facebook-f"></i>
          </button>
          <button className="f-si-btn">
            <i class="fa-brands fa-twitter"></i>
          </button>
          <button className="f-si-btn">
            <i class="fa-brands fa-youtube"></i>
          </button>
          <button className="f-si-btn">
            <i class="fa-brands fa-linkedin-in"></i>
          </button>
        </div>
      </div>
      <div className="footer-r">
        <p className="footer-links">About us</p>
        <p className="footer-links">Job seeker</p>
        <p className="footer-links">Employer</p>
        <p className="footer-links">T&C</p>
        <p className="footer-links">Contact us</p>
      </div>
    </div>
    <div className=" cont footer-d">
        <hr className="footer-hr" />
        <p className="footer-d-text">Copyright © 2024 All Rights Reserved</p>
    </div>
    </>
  );
};
