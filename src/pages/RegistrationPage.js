import React from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link, useNavigate } from "react-router-dom";
import '../components/general.css'

import { signUp } from "redux/auth/authOperations";
import Notiflix from 'notiflix';

const Registration = () => {
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const newUser = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }
        
        signUp(newUser)
        .then(() => {
            console.log("account created")
            Notiflix.Report.success("Success!", "Your account was successfully created!", "Okay!")
            navigate("/login")
        })
        .catch((error) => {
            console.log("Error details:", error);
            Notiflix.Report.failure("Oops!", "An error occurred! Please check all of the registration requirements", "Okay!")
        })

        form.reset();
      };
    return ( 
        <div>
            <h1 className="title">You're at the registration page!</h1>
            <form className="registration__form" onSubmit={handleSubmit}>
                <label className="label">Name
                <Input color="neutral" size="md" variant="solid" type="text" name="name"/>
                </label>

                <label className="label">Email
                <Input color="neutral" size="md" variant="solid" type="email" name="email"/>
                </label>

                <label className="label">Password
                <Input color="neutral" size="md" variant="solid" type="password" name="password"/>
                </label>
                
                <Button color="neutral" type='submit' style={{marginTop: 15}}>Submit</Button>

                <Link to="/login" style={{marginLeft: 15}}>I need to login</Link>
            </form>
            
            <div>
            <h3 style={{marginLeft: 40, marginTop: 50}}>Please make sure you follow these steps:</h3>
            <ul>
                <li style={{marginBottom: 5}}>- Your password is at least 7 characters long</li>
                <li>- Your name starts with a capital letter</li>
            </ul>
            </div>
        

        </div>
    )
}

export default Registration;