import React, { useState } from "react";
import "./home.css";
import { makeStyles } from "@material-ui/core/styles";
import { lazy } from "react";

const Table = lazy(() => import("../../users-table"));
const Quote = lazy(() => import("../../quote/Quote"));
const Random = lazy(() => import("../../random"));
const Header = lazy(() => import("../../header"));

function Home(props) {
    const { movieName, seriesName } = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [isMobile, setIsMobile] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleIsMobile = () => {
        if (window.innerWidth <= 650) setIsMobile(false);
        else setIsMobile(true);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    window.addEventListener("resize", handleIsMobile);
    return (
        <>
            <div className={classes.fadeIn}>
                <div className="root-container">
                    <div className="app-container ">
                        <Header movieName={movieName} seriesName={seriesName} />
                        <div className="random-comp">
                            <Random />
                        </div>
                        <Quote />
                        <Table
                            value={value}
                            handleChange={handleChange}
                            open={open}
                            handleClose={handleClose}
                            setOpen={setOpen}
                            handleIsMobile={handleIsMobile}
                            isMobile={isMobile}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

const useStyles = makeStyles((theme) => ({
    fadeIn: {
        animation: "$fadeAnim 3s linear",
    },
    "@keyframes fadeAnim": {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
}));
