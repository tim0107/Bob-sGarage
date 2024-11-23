import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AuthContext from '../context/AuthProvider';

export default function Navbar() {

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        console.log(auth)
        console.log(auth.role)
    }, [auth])

    const handleNonAdminClick = (event) => {
        event.preventDefault(); 
        alert("You do not have admin access.");
    };
    return (
        <div className="divNav">
            <Link to="/blogs" className="itemNav">Blogs</Link>
            <Link to="/feedback" className="itemNav">Feedbacks</Link>
            <Link to="/services" className="itemNav">Services</Link>
            {/* <Link to="/contact" className="itemNav">Contact</Link> */}
            <Link to="/staffs" className="itemNav">Staff</Link>
            <Link to="/contact" className="itemNav">About</Link>

            {
                auth.role === 'admin' && auth.accessToken ? (
                
                    <Link to="/admin" className="itemNav">Admin</Link>
                ) : (
                    
                    <Link 
                        to="#" 
                        className="itemNav"
                        onClick={handleNonAdminClick} 
                    >
                        Admin
                    </Link>
                )
            }
        </div>
    );
}
