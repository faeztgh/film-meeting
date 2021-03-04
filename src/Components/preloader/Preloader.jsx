import React from "react";
import "./preloader.css";
import preLoader from "./1.gif";

function Preloader() {
    return (
        <>
            <div className="preloader-container">
                <img
                    className="preloader-gif"
                    src={preLoader}
                    alt="preloader"
                />
            </div>
        </>
    );
}

export default Preloader;
