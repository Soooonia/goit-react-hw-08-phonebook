import React from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link, useNavigate } from "react-router-dom";
import '../components/general.css'
import Notiflix from 'notiflix';
import { loginThunk } from "redux/auth/authThunk";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate('/');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [isAuth, navigate]);
  

  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.currentTarget; 

    const loggedInUser = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }

    dispatch(loginThunk(loggedInUser)).unwrap()
    .then(() => {
      Notiflix.Report.success("Success!", "You are now logged in!", "Okay!")
      navigate('/contacts') 
    })
    .catch((error) => {
      //  console.log("Error details:", error);
       Notiflix.Report.failure("Oops!", "Something went wrong! Try logging in again", "Okay!")
    });

    form.reset();
  };

    return ( 
        <div>
            <h1 className="title">You're at the login page!</h1>
            <form className="registration__form" onSubmit={handleSubmit}>

                <label className="label">Email
                <Input color="neutral" size="md" variant="solid" type="email" name="email"/>
                </label>

                <label className="label">Password
                <Input color="neutral" size="md" variant="solid" type="password" name="password"/>
                </label>

                <Button color="neutral" type='submit' className="submit__button" style={{marginTop: 15}}>Submit</Button>

                <Link to="/registration" style={{marginLeft: 15}}>I need to register</Link>
            </form>
        </div>
    )
}

export default Login;