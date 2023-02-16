import React, { useEffect, useRef } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RedBusNavbar from "./Navbar";

const Login = () => {

    const username=useRef();
    const password=useRef();
    const navigate=useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/")
        }
    },[])

    function login(){
        if(!username.current.value||!password.current.value){
            toast.error('Both the fields are required');
        }
        else{
            localStorage.setItem("token","userToken");
            navigate("/")
        }
    }

  return (
    <>
    <Toaster/>
    <Container
      className="d-flex flex-column justify-content-center align-items-center bg-light m-0 mw-100"
      style={{ height: "100vh" }}
    >
       <h1>Login</h1>
        <Form.Control
        ref={username}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="mt-4 w-50"
        />
         <Form.Control
         ref={password}
         type="password"
         className="mt-4 w-50"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Button variant="danger" className="mt-5 w-50" onClick={login}>
            Continue to the application
        </Button>
    </Container>
    </>
  );
};

export default Login;
