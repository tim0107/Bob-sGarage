import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../../context/AuthProvider';

export default function Addfeedback() {
    const inputRef = useRef();
    const { auth } = useContext(AuthContext); // Access the auth state

    const [data, setData] = useState({
        content: ""
    });

    
    // Handle input change for content
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
       
    };

 
    
    
    useEffect(() => {
        console.log(auth.user);
    }, [auth]);

    function handleSubmit(e) {
        e.preventDefault();
        const userData = {
            username : auth.user,  
            content : data.content
        };
        

        console.log(userData);

        
        axios.post('http://localhost:3001/api/feedbacks', userData)
        .then((response) => {
            console.log('Feedback sent successfully, status:', response.status);
            setData({ content: "" }); 
            alert('Feedback sent successfully');
        })
        .catch((error) => {
            console.error('Error submitting feedback:', error.response ? error.response.data : error.message);
        });
    }

    return (
        <form className='addFeedback' onSubmit={handleSubmit}>
              {
                !auth || !auth.accessToken ? (
                    <h4 className='welcomeText'>Hello mate, Please leave the feedback !!</h4>
                ) : (
                    <h4 className='welcomeText'>Hello {auth.user}, Please leave the feedback !!</h4>
                )
            }


            <textarea
                type='text'
                name="content"  // Add the name attribute so handleChange knows what to update
                ref={inputRef}
                value={data.content}  // Controlled input bound to content
                onChange={handleChange}
                placeholder="Enter your feedback"
            />
           {
                !auth || !auth.accessToken ? (
                    <button disabled>Log in to send feedback</button> 
                ) : (
                    <button type="submit">Send feedback</button> 
                )
            }
        </form>
    );
}
