import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" required />
                    </div>
                    <input type="submit" className='form-submit' value="Login"></input>
                </form>
                <p>Already have an account? <Link to="/login" className='form-link'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;