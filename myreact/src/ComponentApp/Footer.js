import React from "react";

export default function Footer() {
    return (
        <div className="divFooter">
            <div className="divContact">
                <div>Contact: 0123456789</div>
                <div>Address: Near the corner of that road</div>
                <div>Email: thisemail@gmail.com</div>
            </div>

            <div className="divHour">
                <div className="hour"  >
                <h3>Hours: </h3>
                </div>
                <div>
                <div>Monday to Friday: 8am to 7pm</div>
                <div>Saturday: 9am to 4pm</div>
                <div>Sunday: 9am to 1pm</div>
                </div>
                
            </div>
        </div>
    )
}