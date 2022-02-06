import React from 'react';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Routes,
    Route
} from "react-router-dom";
import Landing from './landing/Landing';
import Login from './login/Login';


export default function Layout() {
    return(
        <BrowserRouter>
        <Switch>
        {/* <Routes> */}
            <Route exact path='/' render={()=><Landing />}/>
            <Route path="/login" render={() => <Login/>}/>
        </Switch>
        {/* </Routes> */}
        </BrowserRouter>
    )
}