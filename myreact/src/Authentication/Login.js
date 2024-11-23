import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import axios from '../api/axios';
import './Login.css'


const LOGIN_URL = 'http://localhost:3001/api/login';


export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef(); // set the focus on the user input when load
    const userError = useRef() // set the focus on the error
    const navigate = useNavigate(); // Initialize the useNavigate hook


    const [user, setUser] = useState(''); // respond to the user input
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(''); // respond to the error message when meet the error
    const [success, setSuccess] = useState(false); // if login sucess, lead to another page

    useEffect(() => {
        userRef.current.focus();
    }, [])  // render once when the page start and focus on the user input

    useEffect(() => {
        setErr('')
    }, [user, password]);   // if the user's input is not correct, display this

    useEffect(() => {
        if (err) {
            userError.current.focus(); // Focus on the error message if there's an error
        }
    }, [err]); // Run this effect whenever the `err` state changes

    function handleSignUpClick() {
        navigate('/register'); // Programmatically navigate to /register
    }

    // arie-live ensure the error message will immidiately appear when the error start
    async function  handleSubmit(e) {
        try {
            e.preventDefault();

            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    username : user,
                    password,
                    
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
           // console.log(user, password);
            //console.log(response);
           console.log(response?.data);
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.user?.role;
            console.log(accessToken);
            console.log(role)
            setAuth({ user, password, role, accessToken });
            setUser('');
            setPassword('');
            setSuccess(true);
        } catch (error) {
            console.error('Login failed:', error);
            if (error.response) {
                setErr(error.response.data.message || 'Login failed');
            } else {
                setErr('Login failed');
            }
        }

    }
    return (
        <> {success ? (
            <section>
                <h1>You are logged in</h1>
            </section>
        ) : (
            <div className="loginContainer"> {/* Add this wrapper div */}
                <div className="mainLoginDiv">
                    <p ref={userError} className={err ? 'errmsg' : 'offscreen'} aria-live="assertive">{err}</p>
                    <h1> Sign In</h1>
                    <form className="loginDiv" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                        className="loginInput"
                            type='text'
                            id="username"
                            placeholder="Enter:"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                        className="loginInput"
                            type="password"
                            id="password"
                            placeholder="Enter:"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
    
                        <button className="loginBtn">Sign In</button>
    
                        <p>
                            Need an account? <br />
                            <button onClick={handleSignUpClick} className="line">Sign Up</button>
                        </p>
    
                    </form>
                </div>
            </div> 
        )}
        </>
    )
    
}