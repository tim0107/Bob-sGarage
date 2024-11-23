import React from "react";
import Image from './carsign.webp';
import { useNavigate } from 'react-router-dom';


export default function HeaderService() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact'); 
      };

    return (
        <div 
            className="header--service"
            style={{
                backgroundImage: `url(${Image})`, 
                height: '300px',
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <h1 className="header--seviceh1">We service your car</h1>
            <h1 className="header--sevice--quote">Get a quote now !!</h1>
            <button className="btnQuote" onClick={handleClick} >Request a quote</button>
        </div>
    );
}
