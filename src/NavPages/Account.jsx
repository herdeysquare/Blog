import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import axios from 'axios';
import '../css/Account.css';
import ReactModal from 'react-modal';

const Account = ({ isOpen, onRequestClose }) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const url = 'https://localhost:44369/api/User/addUser';
    const LoginUrl = 'https://localhost:44369/api/User/login';


    const toggleClose=() => {
        navigate("/")
    }


    const handleLogin = async () => {
        const user = {
            email,
            password
        };

        try {
            const response = await axios.post(LoginUrl, user);
            console.log(response.data.data);
            // Assuming response.data.data contains user information
            localStorage.setItem('user', JSON.stringify(response.data.data));
            login(response.data.data); // Update with user data from response
            onRequestClose();
            navigate("/Products");
        } catch (error) {
            console.error('Error:', error);
            alert("Fill all fields correctly");
        }
    };

    const handleSignUp = async () => {
        const user = {
            email,
            password,
            firstName,
            lastName,
            phoneNumber
        };

        try {
            const response = await axios.post(url, user);
            console.log(response.data.data);
            // Assuming response.data.data contains user information
            localStorage.setItem('user', JSON.stringify(response.data.data));
            login(response.data.data); // Update with user data from response
            onRequestClose();
            navigate("/");
        } catch (error) {
            console.error('Error:', error);
            alert("Unable to Sign Up");
        }
    };


    ReactModal.setAppElement('#root');

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Login/Signup Modal"
        className={{
            base: "modal",
            afterOpen: "modal--after-open",
            beforeClose: "modal--before-close"
        }}
        overlayClassName={{
            base: "overlay",
            afterOpen: "overlay--after-open",
            beforeClose: "overlay--before-close"
        }}
        closeTimeoutMS={500}
>
        <div className="account-container">
            <button className="close-button"  onclick={onRequestClose}>❌</button>
            <div className="form-container">
                {isLogin ? (
                    <div className="form-section">
                        <h1>Login</h1>
                        <input
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button onClick={handleLogin} id='shop-button'>Login</button>
                        <span>
                            Don't have an account?{' '}
                            <strong onClick={() => setIsLogin(false)}>Sign Up</strong>
                        </span>
                    </div>
                ) : (
                    <div className="form-section">
                        <h1>Sign Up</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                        <button onClick={handleSignUp} id='shop-button'>Sign Up</button>
                        <span>
                            Already have an account?{' '}
                            <strong onClick={() => setIsLogin(true)}>Login</strong>
                        </span>
                    </div>
                )}
            </div>
        </div>
        </ReactModal>
    );
};

export default Account;
