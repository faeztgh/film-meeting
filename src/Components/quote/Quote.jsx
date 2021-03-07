import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import axios from "axios";

const Quote = () => {
    const classes = useStyles();
    const [quote, setQuote] = useState("");
    const [quoteRole, setQuoteRole] = useState("");
    const fetchBBQuote = async () => {
        const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
        let res = await fetch(url);
        res = await res.json();
        setQuote(res[0].quote);
        setQuoteRole(res[0].author);
    };

    const fetchGeneralQuote = () => {
        const url = "/v1/";
        axios
            .get(url)
            .then((res) => {
                setQuote(res.data.quote);
                setQuoteRole(res.data.role);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        let randomNumber = Math.round(Math.random() * (100 - 0) + 0);
        if (randomNumber < 50) {
            fetchBBQuote();
        } else {
            fetchGeneralQuote();
        }
    }, []);

    return (
        <Paper elevation={10} className={classes.root}>
            {quote === "" ? (
                <>
                    <Skeleton variant="text" width="97%" height={30} />
                    <Skeleton variant="text" width="15%" height={20} />
                </>
            ) : (
                <>
                    <q>{quote}</q>
                    <p className={classes.author}>~ {quoteRole}</p>
                </>
            )}
        </Paper>
    );
};

export default Quote;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        marginTop: "15px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "25px",
        minWidth: "85%",
        background: "#383838",
        color: "#eee",
        padding: "5px 10px",
        borderRadius: "15px",
        fontFamily: "EB Garamond",
        letterSpacing: "0.090rem",
        fontSize: "1.1rem",
        "& > *": {
            margin: theme.spacing(1),
        },
    },

    author: {
        fontSize: "1rem",
        fontWeight: "600",
    },
}));
