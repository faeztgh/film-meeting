import React, { useEffect, useState } from "react";
import "./random.css";
import Data from "../../Data/Data";
import CircularProgress from "@material-ui/core/CircularProgress";
function Random(props) {
    let movies = [];

    const [chosenMovie, setChosenMovie] = useState("choose");
    const [loading, setLoading] = useState(false);

    const makeMovieArray = () => {
        const tmp = [];

        const filteredData = Data.filter(
            (e) => e.name !== "Misagh" && e.name !== "Series"
        );
        filteredData.map((data) => {
            return tmp.push(data.movies);
        });

        for (let i = 0; i < tmp.length; i++) {
            // eslint-disable-next-line no-loop-func
            tmp[i].map((data) => {
                return !data.isWatched && movies.push(data.name);
            });
        }
    };

    const choose = () => {
        // makeMovieArray();
        let index = Math.round(Math.random() * (movies.length - 0) + 0);

        setChosenMovie(movies[index]);
        handleLoading();
    };
    const handleLoading = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    };

    useEffect(() => {
        makeMovieArray();
    }, [choose]);
    return (
        <>
            <div className="random-container">
                <div className="chosen-view">
                    {loading && <CircularProgress />}
                    {!loading && <h1>{chosenMovie}</h1>}
                </div>
                <button className="choose-btn" onClick={choose}>
                    Choose
                </button>
            </div>
        </>
    );
}

export default Random;
