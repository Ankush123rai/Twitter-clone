import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { TextField, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Swal from "sweetalert2";

const Register = () => {
  const [hide, setHide] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const [EM, setEM] = useState("");
  const [PW, setPW] = useState("");
  const [Ph, setPh] = useState("");

  const navigate = useNavigate();

  function handlePhone(event) {
    setPhone(event.target.value);
    if (phone.length !== 9) {
      setPh("phone number must be 10 digit");
    } else {
      setPh("");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regEmail.test(email)) {
      setEM("");
    } else if (!regEmail.test(email) && email !== "") {
      setEM("Email is Not Valid");
    }
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW("");
    } else if (!pwRegEx.test(password) && password !== " ") {
      setPW(
        "Password must be min one Capital letter,min one digit & min 6 letter"
      );
    } else {
      setPW("");
    }
  }

  function handleSignup() {
    const storeduser = JSON.parse(localStorage.getItem("userData")) || [];

    const existingUser = storeduser.find(
      (user) => user.name == name || user.email == email || user.phone == phone
    );

    if (existingUser) {
      setRegistrationError(
                
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'your email is already exist',
          footer: '<a href="/login">Your email is already taken</a>'
          })
      );
      return;
    }

    const userData = {
      name,
      email,
      password,
      phone,
      active: {
        isActive: false,
      },
    };
    const updatedUser = [...storeduser, userData];

    if (name && phone && email && password) {
      if (
        EM === "Email is Not Valid" ||
        PW ===
          "Password must be min one Capital letter,min one digit & min 6 letter" ||
        Ph === "phone number must be 10 digit"
      ) {
        alert("you have enter wrong details");
      } else {
        const confirmation = 
       
            Swal.fire(
              'Register Successfull!',
              'You clicked the button!',
              'success'
            )
      
        if (confirmation) {
          localStorage.setItem("userData", JSON.stringify(updatedUser));
          navigate("/login");
        }
      }
    } else {
      alert("All fields are mandatory");
    }
  }
  return (

    <div className={style.container}>

      <div className={style.first_field} style={{ display: hide ? "none" : "" }}>
    
        <div>
          <TwitterIcon sx={{ color: " rgb(29, 155, 240)", fontSize: "40px" }} />
        </div>
        <div>
          <h1>Join Twitter today</h1>
        </div>

        <button>
          <FcGoogle className={style.logo} />
          Sign in with Google
        </button>
        <button>
          <BsApple className={style.logo} />
          Sign in with Google
        </button>

        <hr></hr>
        <span>Or</span>

        <button className={style.create_btn}
          onClick={() => setHide(true)}
        >
          Create account
        </button>
        <p>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <div>
          <p>
            Have an account already? <Link to="/login">Log in</Link>{" "}
          </p>
        </div>
      </div>
      <div


        className={style.second_field}style={{ display: hide ? "" : "none" }}>
        
        <div className={style.close_btn} onClick={() =>navigate("/")} >X</div>
       
        <h1>Create your account</h1>

        <TextField
          sx={{
            width: "100%",
          }}
          label="Name"
          variant="outlined"
          type="text"
          className={style.inputfield}
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><span></span>
        <TextField
            sx={{
              width: "100%",
            }}
            label="Phone"
            variant="outlined"
            type="number"
            value={phone}
            className={style.inputfield}
            onChange={handlePhone}
          />
        <span>{Ph}</span>
        <TextField
          sx={{
            width: "100%",
          }}
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          className={style.inputfield}
          onChange={handleEmailChange}
        /> 
        <span>{EM}</span>

        <TextField
            sx={{
              width: "100%",
            }}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            className={style.inputfield}
            onChange={handlePassword}
        />
        <span>{PW}</span>
    
        <div className={style.signup_btn}>
          {registrationError && <p>{registrationError}</p>}
          <Button
            sx={{
              width: "100%",
              borderRadius: "40px",
              background: "black",
              color: "white",
              overflow: "none",
            }}
            variant="contained"
            onClick={() => handleSignup()}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
