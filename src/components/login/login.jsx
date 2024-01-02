import React from "react";
import Bar from "../titlebar/titlebar";
import { Link } from "react-router-dom";
import "./login.css"


const changeToStd = (e) =>{
    e.preventDefault();
    var fac = document.getElementById("fac");
    var adm = document.getElementById("adm");
    fac.style.backgroundColor = "white"
    fac.style.color = "#e87e6a"
    adm.style.backgroundColor = "white"
    adm.style.color = "#e87e6a"
    e.target.style.backgroundColor = "#e87e6a"
    e.target.style.color = "white"
}

const changeToFac = (e) => {
    e.preventDefault();
    var std = document.getElementById("std")
    std.style.backgroundColor = "white"
    std.style.color = "#e87e6a"
    e.target.style.backgroundColor = "#e87e6a"
    e.target.style.color = "white"
    var adm = document.getElementById("adm");
    adm.style.backgroundColor = "white"
    adm.style.color = "#e87e6a"
}

const changeToAdm = (e) => {
    e.preventDefault();
    var std = document.getElementById("std")
    std.style.backgroundColor = "white"
    std.style.color = "#e87e6a"
    e.target.style.backgroundColor = "#e87e6a"
    e.target.style.color = "white"
    var fac = document.getElementById("fac");
    fac.style.backgroundColor = "white"
    fac.style.color = "#e87e6a"
}

const login = () =>{

}

const Login = () => {
    return(
        <div>
            <Bar/>
            <div className="login">
                <div className="container">
                    <div className="buttons">
                        <button className="btn admbtn" id="adm" onClick={changeToAdm}>Admin</button>
                        <button className="btn stubtn" id = "std" onClick={changeToStd} >Student</button>
                        <button className="btn facbtn"id="fac" onClick={changeToFac} >Faculty</button>
                    </div>
                    <div className="form">
                        <div className="inp-grp-logo">
                            <div className="userlogo"></div>
                            <div className="input-grp">
                                <input type="text" name="" className="inp"placeholder="    "/>
                                <label>User ID / Registration No</label>
                            </div>
                        </div>
                        <div className="inp-grp-logo">
                            <div className="passlogo"></div>
                            <div className="input-grp">
                                <input type="password" name="" className="inp" placeholder="    "/>
                                <label > Password</label>
                            </div> 
                        </div>
                        <Link to ="/dashboard" className="frmbtn" style={{textDecoration:"None"}}><button >Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;