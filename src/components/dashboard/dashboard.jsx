import React from "react";
import Bar from "../titlebar/titlebar";
import "./dashboard.css"

const Dashboard = () =>{
    return(
        <div>
            <Bar/>
            <div className="dashboard">
                <div className="containerdb">
                    <div className="details">
                        <div className="branch">
                            <label className="details-label"> Branch : </label>
                            <select name="csm" id="" className="details-select">
                                <option value="AIDS">AIDS</option>
                                <option value="AIML">AIML</option>
                                <option value="CSE">CSE</option>
                                <option value="CSM">CSM</option>
                                <option value="CIC">CIC</option>
                                <option value="CSO">CSO</option>
                                <option value="CIVIL">CIVIL</option>
                                <option value="IT">IT</option>
                                <option value="MECH">MECH</option>
                                <option value="EEE">EEE</option>
                                <option value="ECE">ECE</option>
                            </select>
                        </div>
                        <div className="year">
                        <label className="details-label"> year : </label>
                        <select name="" id="" className="details-select">
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                        </select>
                        </div>
                        <div className="section">
                        <label className="details-label"> Section : </label>
                        <select className="details-select">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                        </div>
                        <button className="btn-sub">submit</button>
                    </div>
                    <div className="results">

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard