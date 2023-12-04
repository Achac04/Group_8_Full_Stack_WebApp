const Footer = () => (
    <footer>
      <div>
        <h3>Contact Us</h3>
        <p>Email: IMR@gmail.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div>
        <h3>Company Information</h3>
        <p>&copy; {new Date().getFullYear()} Internet Movies Rental Company </p>
        <p>Address: 123 Main Street, Calgary</p>
      </div>
    </footer>
  );
    const footerStyle ={   
    
    color: "#fff",
    padding: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    }
    const sectionStyle = {
      maxWidth: "300px",
      textAlign: "left",
    };
  
  export default Footer;