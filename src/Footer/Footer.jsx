import React, { useState, useEffect } from "react";
import GoogleFormsPopUp from "../GoogleFormsPopUp/GoogleFormsPopUp";
import "./Footer.css";
import mobileImg from "../IMG/FooterMobile.png";
import webImg from "../IMG/FooterWeb.png";

function Footer() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        setIsActive(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setIsActive(false);
    };

    useEffect(() => {
        // Your custom JavaScript code
        const targetElement = document.querySelector(".box-form");
        const signUpButton = document.getElementById("bottom-sign-up-btn");
        console.log(signUpButton);
        // Create an IntersectionObserver to observe the target element
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Hide the button when the target element is in view
                        signUpButton.style.display = "none";
                    } else {
                        // Show the button when the target element is out of view
                        signUpButton.style.display = "block";
                    }
                });
            },
            {
                root: null, // Use the viewport as the root
                threshold: 0, // Trigger as soon as even one pixel is out of view
            }
        );

        // Start observing the target elemen
        observer.observe(targetElement);

    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <footer className="footer">
            <img
                src={mobileImg}
                alt="Footer for mobile"
                className="footer-img mobile"
            />
            <img src={webImg} alt="Footer for web" className="footer-img web" />
            <div id="bottom-sign-up-btn" className="container">
              <button
                  onClick={handleOpenPopup}
                  className="sign-up-btn"
              >
                  Inscreva-se
              </button>
            </div>
            <GoogleFormsPopUp
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                className={isPopupOpen ? "active" : ""}
            />
        </footer>
    );
}

export default Footer;
