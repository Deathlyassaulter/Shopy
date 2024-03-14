import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

import { styled } from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width : 300px;
    margin: 0 auto;    
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 30px;
    background-color: #f8f8f8;
`
const Title = styled.h2`
    text-align: center;
    margin-bottom:20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const User = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    
`

const Pass = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
`

const Button = styled.button`
    padding: 10px 15px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
        transform: scale(1.01);
      }
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) =>{
        e.preventDefault();
        login(dispatch, {username, password});
    };

    return (
        <Container>
            <Title>Login</Title>
            <Form>
                <User 
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Pass 
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick}>
                    Login
                </Button>
            </Form>
        </Container>
    );

};

export default Login;