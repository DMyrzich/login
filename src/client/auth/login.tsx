import { json } from "express";
import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import './login.css';

const Login = ({ Token, SetToken }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error, SetError] = useState("");

    function enter() {

        SetError("");
        fetch('https://damp-meadow-18066.herokuapp.com/api/auth/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => {

                const { response } = data;
                if (response.error) {

                    SetError(response.error.message)
                }
                else {
                    if (response.user.token) {
                        SetToken(response.user.token);
                    }
                }
            });
    }

    return (<div style={{ position: 'relative', top: 60 }}>
        <div className="input-field col s6">
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="icon_prefix" type="text" className="validate" />
            <label className="icon_prefix">Email</label>
        </div>
        <div className="input-field col s6">
            <input value={password} onChange={(e) => setPassword(e.target.value)} id="icon_telephone" type="tel" className="validate" />
            <label className="icon_telephone">Password</label>
        </div>
        {
            Error ? <p className="login-error">{Error}</p> : null
        }
        <div style={{ display: 'flex', justifyContent: "center", paddingBottom: 10 }}>
            <p style={{ margin: 0, marginRight: 5 }}>Первый раз?</p>
            <Link to="/registr" className="center">Зарегистрироваться</Link>
        </div>
        <button className="center btn blue" onClick={enter} style={{ width: 300, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>Войти</button>
    </div>)

}

export default Login;