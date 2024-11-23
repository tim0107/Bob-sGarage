import React from "react";
import {Link} from 'react-router-dom'

export default function Heaher() {
    return (
        <div className="divHeader">
            <header>
                <h1>Welcome to Bob's garage</h1>
            </header>
            <p>Bob's Garage is your trusted local workshop for all car repairs and maintenance. With experienced mechanics and friendly service, we keep your vehicle running smoothly at an affordable price. From routine services to major repairs, Bob’s Garage has you covered.</p>
            <Link to="/login" className="linkLogin">Login</Link>
        </div>
    )


}