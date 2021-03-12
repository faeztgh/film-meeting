import React from "react";
import Data from "../../Data/Data";
import "./neon.css";
import { v1 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Header(props) {
    const { movieName, seriesName } = props;

    // finding owner of the movie
    const ownerObj = Data.find((o) =>
        o.movies.find((item) => item.name === movieName)
    );

    // finding movie object
    const movieObj = ownerObj.movies.find((o) => o.name === movieName);
    const { name, src, dlLink } = movieObj;
    const nameCharArr = [...name];

    // finding series
    const seriesObj = Data.find((o) => o.name === "Series").movies.find(
        (item) => item.name === seriesName
    );
    return (
        <>
            <div className="week-movie-container">
                <div className="title-wrapper">
                    <h1> 🎬 This Week Movie </h1>
                    <div className="neon">
                        <p>
                            <a href={dlLink} target="_blank" rel="noreferrer">
                                {nameCharArr.map((item) => {
                                    return <span key={v1()}>{item}</span>;
                                })}
                            </a>
                        </p>
                    </div>
                    <h4>
                        introduced by :
                        <span className="movie-owner"> {ownerObj.name}</span>
                    </h4>
                    <h1> This Week Series 🎭</h1>
                    <a href={seriesObj.dlLink} target="_blank" rel="noreferrer">
                        <h2 className="series-name">
                            (Love Death + Robots - S01 E05)
                        </h2>
                    </a>
                </div>
                <div className="week-movie-wrapper">
                    <LazyLoadImage src={src} effect="blur" />
                    <LazyLoadImage src={seriesObj.src} effect="blur" />
                </div>
            </div>
        </>
    );
}

export default Header;
