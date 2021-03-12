import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import Preloader from "./Components/preloader/Preloader";
const Home = lazy(() => import("./Components/pages/Home/Home"));
function App() {
    const [movieName, setMovieName] = useState("the gardener");
    const seriesName = "Love Death + Robots";

    return (
        <>
            <Suspense fallback={<Preloader />}>
                <Home
                    movieName={movieName}
                    setMovieName={setMovieName}
                    seriesName={seriesName}
                />
            </Suspense>
        </>
    );
}

export default App;
