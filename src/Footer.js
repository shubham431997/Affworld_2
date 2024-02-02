import React from "react";
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light py-3">
        <div className="container" style={{justifyContent:'center',textAlign:'center'}}>
            <div className="row">
                <div className="col-md-4">
                    <h4>Contact Us</h4>
                    <p>For inquiries and support:</p>
                    <p>Phone: +91 000-000-0000</p>
                    <p>Email: info@gmail.com</p>
                    <p>Website: <a href="https://www.movies.com" className="text-light">www.example.com</a></p>
                </div>
                <div className="col-md-6" style={{padding:'50px'}}>
                    <h4>Follow Us</h4>
                    <div className="social-icons" >
                        <SocialIcon url="https://twitter.com" />{" "}
                        <SocialIcon url="https://facebook.com" />{" "}
                        <SocialIcon url="https://instagram.com" />
                        <SocialIcon url="https://github.com" />
                    </div>  
                </div>
            </div>
            <h5>© 2024 Movies.com. All rights reserved.</h5>
        </div>
    </footer>
    </div>
  );
}

export default Footer;