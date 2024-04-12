import { useState, useEffect } from "react";
import SeasonBlockBuilder from "./SeasonBlockBuilder";

function SeasonBuilder({ targetSeries, seriesList }) {
    const [seasons, setSeasons] = useState({}); // Initialize seasons as an empty object

    useEffect(() => {
        seriesList.forEach((series) => {
            if (series.title === targetSeries) {
                setSeasons(series.seasons || {}); // Ensure seasons is set as an object
            }
        });
    }, [seriesList, targetSeries]);

    const addSeason = () => {
        const newId = Object.keys(seasons).length + 1; // Get next ID based on the number of keys
        const newSeason = { id: newId, episodes: {} }; // Initialize new season with episodes as an object
        setSeasons({
            ...seasons,
            [newId]: newSeason // Use computed property name to add new season
        });
    };

    return (
        <div className="wrapper">
            {Object.values(seasons).length > 0 && <SeasonBlockBuilder seasons={seasons} />}
            <button id="addASeasonButton" onClick={addSeason}>+ Add A Season</button>
        </div>
    );
}

export default SeasonBuilder;