import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';
import signup1 from '../assets/signup1.jpg';
import './SignUp.css';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        // Basic form validation
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        // More advanced form validation can be added here

        // Storing email and password in local storage
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));

        // Feedback to user upon successful signup
        alert("Signup successful!");

        // Optional: Redirect to login page
        navigate("/Login")
        // history.push('/login');
    }

    return (
        <>
            <div id='flex_container'>
                <div><img src={signup1} alt="logo_signup" /></div>
                <div id='design'>
                    <div>
                        <Link to="/Login">Login</Link>
                        <Link to="/SignUp">Signup</Link>
                    </div>
                    <div><h1>Sign Up!</h1></div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <br />
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button colorScheme='blue' type="submit">Submit</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                    
                </div>
            </div>
        </>
    );
}

export default SignUp;
