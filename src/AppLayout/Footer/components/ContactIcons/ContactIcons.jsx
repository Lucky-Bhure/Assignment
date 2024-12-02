import React from "react";
import "../../Footer.css";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";

const ContactIcons = () => {
    return (
        <div className="footer4">
            <p>
                <span className="bold">Follow us on</span>
            </p>
            <p>
                <a href="https://www.whatsapp.com/channel/0029VaL3vjg0LKZJrpFc440L" target="_blank" rel="noreferrer">
                    <BiLogoWhatsapp className="contact-logo" size={24} />
                </a>
            </p>
            <p>
                <a href="https://www.facebook.com/jobwithjobringer/" target="_blank" rel="noreferrer">
                    <BiLogoFacebookCircle className="contact-logo" size={24} />
                </a>
            </p>
            <p>
                <a href="https://x.com/jobs_jobringer" target="_blank" rel="noreferrer">
                    <BiLogoTwitter className="contact-logo" size={24} />
                </a>
            </p>
            <p>
                <a href="https://www.instagram.com/jobringerjobs" target="_blank" rel="noreferrer">
                    <BiLogoInstagram className="contact-logo" size={24} />
                </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/company/jobringer?originalSubdomain=in" target="_blank" rel="noreferrer">
                    <BiLogoLinkedin className="contact-logo" size={24} />
                </a>
            </p>
            <p>
                <a href="https://www.youtube.com/channel/UCE2yLiRuBlfAEVVVEidbzdg" target="_blank" rel="noreferrer">
                    <BiLogoYoutube className="contact-logo" size={24} />
                </a>
            </p>
            <p>
                <a href="https://telegram.me/jobs_jobringer" target="_blank" rel="noreferrer">
                    <BiLogoTelegram className="contact-logo" size={24} />
                </a>
            </p>
        </div>
    );
};

export default ContactIcons;
