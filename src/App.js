import "./App.css";
import { useEffect, useState } from "react";
import Character from "./characters/Character";
import ChartBar from "./chart/ChartBar";
import { fetchCharacters } from "./helpers/dataHelper";

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
            {/* <Character characters={characters} /> */}
            <ChartBar characters={characters} />
        </div>
    );
}

export default App;
