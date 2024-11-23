import React from "react";
import carImage from './car.jpg'; // Ensure the path matches exactly

export default function Sign() {
    return (
        <div className="sign">
            <img src={carImage} alt="Car" />
        </div>
    );
}
