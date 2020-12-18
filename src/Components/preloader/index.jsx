import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import preLoader from "./1.gif";
const useStyle = makeStyles(() => ({
    root: {
        background: "#000",
        display: "flex",
        flexDirection: "column",
        animation: "$fadeAnim infinite 5s linear",
    },
    loaderImage: {
        // animation: "$anim infinite 1.5s linear",
    },

    text: {
        color: "#FFF",
    },
    "@keyframes anim": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
    },
    "@keyframes fadeAnim": {
        from: { opacity: 1 },
        to: { opacity: 0.3 },
    },
}));

function Preloader(props) {
    const classes = useStyle();
    return (
        <>
            <Backdrop open={props.open} className={classes.root}>
                <img src={preLoader} alt="" className={classes.loaderImage} />
             
            </Backdrop>
        </>
    );
}

export default Preloader;
