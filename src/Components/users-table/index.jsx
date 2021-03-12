import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import MyDialog from "../dialog";
import Data from "../../Data/Data";
import "./table.css";
import Grid from "@material-ui/core/Grid";
const Table = (props) => {
    const {
        value,
        handleChange,
        open,
        handleClose,
        handleIsMobile,
        isMobile,
        setOpen,
    } = props;

    const classes = useStyles();
    const descriptionElementRef = useRef(null);
    const [scroll, setScroll] = useState("paper");
    const [movieData, setMovieData] = useState({});

    const handleClickOpen = (scrollType, movie) => () => {
        setOpen(true);
        setScroll(scrollType);
        setMovieData(movie);
    };

    useEffect(() => {
        handleIsMobile();

        //-------------------
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} sm={12} md={12}>
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        {Data.map((data) => {
                            return (
                                <Tab
                                    key={data.id}
                                    label={` ${data.name} `}
                                    {...a11yProps(data.id)}
                                />
                            );
                        })}
                    </Tabs>

                    {Data.map((data) => {
                        return (
                            <div key={data.id}>
                                <TabPanel value={value} index={data.id}>
                                    {data.movies.map((e) => {
                                        return (
                                            <div
                                                key={e.id}
                                                className="movie-container"
                                            >
                                                <MyDialog
                                                    open={open}
                                                    scroll={scroll}
                                                    handleClose={handleClose}
                                                    descriptionElementRef={
                                                        descriptionElementRef
                                                    }
                                                    movie={movieData}
                                                />

                                                <div className="movie-name-wrapper">
                                                    <button
                                                        className="movie-name-btn"
                                                        onClick={handleClickOpen(
                                                            "paper",
                                                            e
                                                        )}
                                                    >
                                                        {e.name}
                                                    </button>
                                                </div>

                                                {isMobile && (
                                                    <div className="movie-year-wrapper">
                                                        {` | ${e.year} |`}
                                                    </div>
                                                )}

                                                {isMobile && (
                                                    <div className="imdb-wrapper">
                                                        {e.imdb}
                                                    </div>
                                                )}

                                                <div
                                                    id="is-watched"
                                                    className={
                                                        e.isWatched
                                                            ? "watched"
                                                            : "not-watched"
                                                    }
                                                >
                                                    {e.isWatched
                                                        ? "Watched"
                                                        : "Not-Watched"}
                                                </div>
                                                {isMobile && (
                                                    <div className="download-link">
                                                        <a
                                                            href={e.dlLink}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            Download
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </TabPanel>
                            </div>
                        );
                    })}
                </div>
            </Grid>
        </Grid>
    );
};

export default Table;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#2d2d2d",
        display: "flex",
        minHeight: "500px",
        width: "90%",
        borderRadius: "15px",
        padding: "80px 0",
        filter: "drop-shadow(2px 15px 15px rgb(17, 17, 17))",
        margin: "auto",
        position: "relative",
    },
    tabs: {
        borderRight: `2px solid ${theme.palette.divider}`,
    },

    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightBold,
        textTransform: "capitalize",
    },
}));
