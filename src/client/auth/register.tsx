import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

const Registr = ({ Token, SetToken }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error, SetError] = useState("");

    function enter() {

        fetch('https://my-logins.herokuapp.com/api/auth/register', {
            method: "POST",
            body: JSON.stringify({ name, password, email }),
            headers: {
                'Content-Type': 'application/json'
            },
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

    return (<div>
        <div className="input-field col s6">
            <input value={name} onChange={(e) => setName(e.target.value)} id="icon_prefix" type="text" className="validate" />
            <label className="icon_prefix">Name</label>
        </div>
        <div className="input-field col s6">
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="icon_telephone" type="tel" className="validate" />
            <label className="icon_telephone">Email</label>
        </div>
        <div className="input-field col s6">
            <input value={password} onChange={(e) => setPassword(e.target.value)} id="icon_telephone" type="tel" className="validate" />
            <label className="icon_telephone">Password</label>
        </div>
        {
            Error ? <p className="login-error">{Error}</p> : null
        }
        <div style={{ display: 'flex', justifyContent: "center", paddingBottom: 10 }}>
            <p style={{ margin: 0, marginRight: 5 }}>Уже зарегистрированы?</p>
            <Link to="/login" className="center">Войти</Link>
        </div>
        <button className="btn blue" onClick={enter} style={{ width: 300, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>Регистрация</button>
    </div>)

}

export default Registr;