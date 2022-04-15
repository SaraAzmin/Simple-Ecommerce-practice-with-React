import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = (event) => {

        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {

        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSubmit = event => {

        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input type="submit" className='form-submit' value="Login"></input>
                </form>
                <p>New here? <Link to="/signup" className='form-link'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;