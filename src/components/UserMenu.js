import { deleteToken } from "redux/auth/authOperations";
import { logOutThunk } from "redux/auth/authThunk";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./general.css"
import Button from '@mui/joy/Button';
import Notiflix from 'notiflix';

const UserMenu = () => {
    const { profile, userName, userEmail} = useSelector((state) => state.auth);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleLogout = () => { 
        dispatch(logOutThunk()); 
        deleteToken(); 
        navigate('/login');
        Notiflix.Report.success("Success!", "You are now logged out!", "Okay!")
        console.log('logged out');
    };

    return (
        <div>
            {profile && (
                <div className="logout_section">
                    <p className="welcome_text">Welcome, {userName}!</p>
                    <p className="welcome_text">{userEmail}</p>
                    <Button color="neutral" type='button' onClick={userName ? handleLogout : handleLogin} style={{height: 20, width: 120}}>
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
}

export default UserMenu;