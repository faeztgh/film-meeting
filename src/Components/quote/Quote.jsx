import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import axios from "axios";

const Quote = () => {
    const classes = useStyles();
    const [quote, setQuote] = useState("");
    const [quoteRole, setQuoteRole] = useState("");
    const [quoteShow, setQuoteShow] = useState("");
    const fetchBBQuote = async () => {
        const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
        let res = await fetch(url);
        res = await res.json();
        setQuote(res[0].quote);
        setQuoteRole(res[0].author);
        setQuoteShow("Breaking Bad");
    };

    const fetchGeneralQuote = () => {
        const url = "https://movie-quote-api.herokuapp.com/v1/quote/";
        axios
            .get(url)
            .then((res) => {
                setQuote(res.data.quote);
                setQuoteRole(res.data.role);
                setQuoteShow(res.data.show);
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
                    <div className={classes.wrapper}>
                        <p className={classes.author}>~ {quoteRole}</p>
                        <p> ⠀ </p>
                        <p className={classes.show}>
                            {quoteShow !== "" && "🎬" + quoteShow}
                        </p>
                    </div>
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
        color: "rgb(8, 143, 136)",
    },

    show: {
        color: "rgb(27, 147, 202)",
        fontSize: "1rem",
        fontWeight: "600",
    },

    wrapper: {
        display: "flex",
        width: "100%",
    },
}));
