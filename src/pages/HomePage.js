import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/joy/Button';

const HomePage = () => {
    return (
        <div>
            <h1 className="title">Welcome to your contact book!</h1>
            <p style={{marginLeft: 40, fontSize: 20}}>Please sign up or log in to look through your contacts:</p>
            
            <div className="link__buttons">

            <Link to="/registration" className="button">
            <Button color="neutral">Go to the registration page</Button>
            </Link>

            <Link to="/login" className="button">
            <Button color="neutral">Go to the login page</Button>
            </Link>
            
            </div>

        </div>
    )
}

export default HomePage;