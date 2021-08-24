import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './auth/login';
import Registr from './auth/register';
import DashBoard from './dashboard/dashboard';

const App = () => {

    const [Token, SetToken] = useState("");

    return (
        <BrowserRouter>

            <div>
                <nav className="blue">
                    <div style={{ margin: 10 }} className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/registr">Регистрация</Link></li>
                            <li><a href="#2">Мои работы</a></li>
                            <li><Link to="/login">Войти</Link></li>
                        </ul>
                    </div>
                </nav>

                <div style={{ display: 'flex', height: 450, justifyContent: 'center', position: 'relative', top: 35 }}>

                    <Switch>

                        {
                            Token ? <Link to="/dashboard" component={() => <DashBoard Token={Token} SetToken={SetToken} />} /> : <>
                                <Route exact path="/registr">
                                    <Registr Token={Token} SetToken={SetToken} />
                                </Route>
                                <Route exact path="/login">
                                    <Login Token={Token} SetToken={SetToken} />
                                </Route>
                                <Route path="/" exact>
                                    <div style={{ display: 'flex', position: 'relative', top: 150 }}>
                                        <p style={{ margin: 0, marginRight: 10 }}>Чтобы видеть контент нужно войти</p>
                                        <Link style={{ marginRight: 10 }} to='login'>Войти</Link>
                                        <p style={{ margin: 0, marginRight: 10 }}> или </p>
                                        <Link to='registr'>Регистрация</Link>
                                    </div>
                                </Route>
                            </>
                        }

                    </Switch>

                </div>


                <footer className="page-footer blue">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">© 2014 Copyright Text<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </div >
        </BrowserRouter>
    )
}
render(<App />, document.getElementById('app'));