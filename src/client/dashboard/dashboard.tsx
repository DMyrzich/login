
import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";


const DashBoard = ({ Token, SetToken }) => {

    const [data, SetDate] = useState({ response: { user: { id: null, created_at: null, email: null, name: null } } })

    useEffect(() => {

        fetch('http://my-logins.herokuapp.com/api/auth/user', {
            method: "GET",
            headers: {
                'Authorization': Token
            }
        })
            .then((response) => response.json())
            .then((data) => {

                SetDate(data);
            });

    }, [])

    var mydate = new Date('2014-04-03');
    console.log(mydate.toDateString());

    return (<div style={{ position: 'relative', top: 60 }}>

        <div style={{ paddingBottom: 10 }}>
            <Link to="/registr" className="center">Ваша информация</Link>
            <p>Рады привествовать вас: {data.response.user.name}</p>
            <p>Дата регистрации: {data.response.user.created_at}</p>
            <p>Ваша почта: {data.response.user.email}</p>
            <p>Ваша Id: {data.response.user.id}</p>
        </div>
        <button className="center btn blue" onClick={() => SetToken("")} style={{ width: 300, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>Выйти</button>
    </div >)

}

export default DashBoard;