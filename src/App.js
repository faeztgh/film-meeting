import React, { useState } from "react";
import "./App.css";
import Home from "./Components/pages/Home/Home";
import Preloader from "./Components/preloader";
function App() {
    const [loading, setLoading] = useState(true);
    const [movieName, setMovieName] = useState("silence");
    const [seriesName, setSeriesName] = useState("Love Death + Robots");
    setTimeout(() => {
        setLoading(false);
    }, 4000);

    return (
        <>
            {loading ? (
                <Preloader open={loading} />
            ) : (
                <Home
                    movieName={movieName}
                    setMovieName={setMovieName}
                    seriesName={seriesName}
                />
            )}
        </>
    );
}

export default App;