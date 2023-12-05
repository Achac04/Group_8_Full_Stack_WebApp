import React from "react";

const Footer = () => (
  <footer style={footerStyle}>
    <div style={sectionStyle}>
      <h3 style = {{ color:'#3498db'}}>Contact Us</h3>
      <p style = {{ color:'#3498db'}}>Email: IMR@gmail.com</p>
      <p style = {{ color:'#3498db'}}>Phone: +1 123-456-7890</p>
    </div>
    <div style={sectionStyle}>
      <h3 style = {{ color:'#3498db'}}>Company Information</h3>
      <p style={{ marginBottom: "8px", color:'#3498db' }}>
        &copy; {new Date().getFullYear()} Internet Movies Rental Company
      </p>
      <p style={{color:'#3498db' }}>Address: 123 Main Street, Calgary</p>
    </div>
  </footer>
);

const footerStyle = {
  backgroundColor: "#333", // Dark background color
  color: "#fff", // White text color
  padding: "20px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
};

const sectionStyle = {
  maxWidth: "300px",
  textAlign: "left",
};

export default Footer;

  
