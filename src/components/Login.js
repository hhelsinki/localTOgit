import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

function Login() {
    const ggClientId = '412920764604-j8act2t26db6ci1jq74bdj3fd7ju64bd.apps.googleusercontent.com';
    let navigate = useNavigate();
    
    const handleLogin = async (credentialResponse) => {
        console.log(credentialResponse);
        var obj = jwt_decode(credentialResponse.credential);
        var rawData = credentialResponse.credential;
        var data = JSON.stringify(obj);
        console.log(obj.jti);
        console.log(data);
        

        const myData = {
            "token": "frontend token" 
        }
        const config = {
            method: 'POST',
            url: `http://localhost:3001/api/google-login/tokeninfo?id_token=${obj}`,
            data: {
                rawData
            }
        }
        await axios(config)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

      
    useEffect(() => {

    }, []);

    return (
        <div>

            <GoogleOAuthProvider clientId={ggClientId}>
                <GoogleLogin
                    login_uri="http://localhost:3001/api/google-login"
                    onSuccess={handleLogin}
                    onError={() => {
                        console.log('Login Failed');
                    }}

                />
            </GoogleOAuthProvider>

        </div>
    );
}

export default Login;