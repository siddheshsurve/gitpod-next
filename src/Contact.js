import React from "react";
import PhoneIcon from "./images/phone-icon.png"
import MailIcon from "./images/mail-icon.png"
import "./index.css"
export default function Contact (props) {
    return (
        <>
             <div className="contact-card">
                <img src={props.img} />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src= {PhoneIcon} />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src= {MailIcon} />
                    <p>{props.email}</p>
                </div>
             </div>
        </>
    )
}