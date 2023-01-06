import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { DialogContent, DialogContentText } from "@material-ui/core";
import WizboImg from '../Img/wezbo-img.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function menuFunc() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="nav-div">
                <div className="nav-menu">
                    <div>
                        <img className="wizbo-img" src={WizboImg} />
                        {/* <h3
                            className="nav-right"
                            style={{ marginTop: "0px", fontSize: "23px" }}
                        >
                            Biteable
                        </h3> */}
                    </div>
                    <div className="nav-menu">
                        <div className="nav-right">
                            <b>Home</b>
                        </div>

                        <div className="nav-right">
                            <b>Our Story</b>{" "}
                        </div>
                        <div className="nav-right" style={{ position: 'relative', bottom: "7px" }} onClick={menuFunc}>
                            <b>Top Fruits</b>
                            {isOpen ? (
                                <KeyboardArrowUpIcon className="social-media" />
                            ) : (
                                <KeyboardArrowDownIcon className="social-media" />
                            )}
                            {/* {isOpen ? (
                                <DialogContent className="card">
                                    <DialogContentText className="nav-menu">
                                        <div>
                                            <p>Biteable Teams </p>
                                            <p>Internal communication </p>
                                            <p>Sales enablement </p>
                                            <p>Templates </p>
                                        </div>
                                    </DialogContentText>
                                </DialogContent>
                            ) : null} */}
                        </div>
                        <div className="nav-right">
                            <b>Pricing</b>
                        </div>
                        <div className="nav-right">
                            <b>Say Hello!</b>
                        </div>
                    </div>
                    <div>
                        <button className="clock-btn">Clockin</button>
                    </div>
                </div>
            </div>
        </>
    );
}
