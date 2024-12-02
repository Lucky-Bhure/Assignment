import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import CountValues from "./components/CountValues/CountValues";
import IndiaCity from "./components/IndiaCity/IndiaCity";
import Country from "./components/Country/Country";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <IndiaCity />
        <Country />
      </div>
      <CountValues />
      <div className="footer3">
        <div className="disclaimer">
          <p>
            <span className="bold">Disclaimer: </span>All Trademarks and Logos are the property
            of their respective owners, depicted here purely for representation
            purpose. | Jobringer.com has taken all reasonable steps to ensure
            that information on this site is genuine. Job Applicants are advised
            to evaluate independently. Jobringer.com shall not have any
            responsibility in this regard. All Jobseeker services are strictly
            designed & meant only for job search assistance and to maximize the
            chances for the jobseekers to get their dream job. All Job Seeker
            Credentials and Employment Opportunities are subject to individual
            merit & evaluation. We do not guarantee any job to any jobseeker.
          </p>
        </div>
        <div className="startup-info">
          <p>
            <a href={"startup_india.pdf"} target="_blank" rel="noreferrer" className="a-tag">
              Recognized By
            </a>
          </p>
          <img src="startuplogo.png" alt="startuplogo" className="logo" />
        </div>
      </div>
      <ContactIcons />
      <div className="footer5">
        <p>
          <a href={"terms&condition.pdf"} target="_blank" rel="noreferrer" className="a-tag">
            Terms and conditions
          </a>
          |
          <a href={"privacy-policy.pdf"} target="_blank" rel="noreferrer" className="a-tag">
            Privacy Policy
          </a>
          |
          <a href={"refund-policy.pdf"} target="_blank" rel="noreferrer" className="a-tag">
            Refund / Cancellation
          </a>
          | Policy About Us | Contact Us | FAQ
        </p>
        <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
      </div>
    </div>
  );
};

export default Footer;
