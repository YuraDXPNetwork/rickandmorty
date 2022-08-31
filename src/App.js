import "./App.css";
import { useEffect, useState } from "react";
import Character from "./characters/Character";
import ChartBar from "./chart/ChartBar";
import { fetchCharacters } from "./helpers/dataHelper";
import { Link, Route, Routes } from "react-router-dom";

function App() {
    const [characters, setCharacters] = useState();

    const getCharacters = async () => {
        const chars = await fetchCharacters();
        setCharacters(chars);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="App">
            <div className="nav">
                <Link to="/character">Most unpopular</Link>
                <Link to="/chart-bar">Five most popular</Link>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<Character characters={characters} />}
                />
                <Route
                    path="/character"
                    element={<Character characters={characters} />}
                />
                <Route
                    path="/chart-bar"
                    element={<ChartBar characters={characters} />}
                />
            </Routes>
            {/* <Character characters={characters} /> */}
            {/* <ChartBar characters={characters} /> */}
        </div>
    );
}

export default App;
