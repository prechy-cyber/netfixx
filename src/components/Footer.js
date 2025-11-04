import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-top">Questions? <a href="/us">Contact us.</a></p>

        <div className="footer-links">
          <div className="footer-column">
            <a href="/faq">FAQ</a>
            <a href="/relations">Investor Relations</a>
            <a href="/privacy">Privacy</a>
            <a href="/speed">Speed Test</a>
          </div>
          <div className="footer-column">
            <a href="/help">Help Center</a>
            <a href="/job">Jobs</a>
            <a href="/cookie">Cookie Preferences</a>
            <a href="/legal">Legal Notices</a>
          </div>
          <div className="footer-column">
            <a href="/account">Account</a>
            <a href="/ways">Ways to Watch</a>
            <a href="/info">Corporate Information</a>
            <a href="/only">Only on Netflix</a>
          </div>
          <div className="footer-column">
            <a href="/media">Media Center</a>
            <a href="/use">Terms of Use</a>
            <a href="/us">Contact Us</a>
          </div>
        </div>

        <p className="footer-country">Netflix Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;
