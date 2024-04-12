import { useState, useEffect } from "react";
import SeasonBlockBuilder from "./SeasonBlockBuilder";

function SeasonBuilder({targetSeries, seriesList}) {
	const [seasons, setSeasons] = useState([]);

	useEffect(()=> {
		seriesList.forEach((element) => {
			if (element.title === targetSeries) {
				setSeasons(element.seasons);
			}
		});
	}, [seriesList, targetSeries]);

	const addSeason = () => {
        const newId = seasons.length + 1; // Get next ID
		const newSeason = { id: newId, episodes: {}, isEditable: true }; // Ensure episodes is an object
        setSeasons([...seasons, newSeason]);
	};

	return (
		<div className="wrapper">
			{seasons && <SeasonBlockBuilder seasons={seasons}/>}
			

			<div className="seasons">
				<div className="left">
					<span className="season">Season 3</span>
				</div>
				<div className="right edit">
					<div className="seasonEpisodes">
						<span>How Many Episodes in Season 3?</span>
						<input type="text" />
					</div>
					<button className="addEpisodesButton">Save Episodes</button>
				</div>
			</div>

			<button id="addASeasonButton" onClick={addSeason}>+ Add A Season</button>
		</div>
	)
}

export default SeasonBuilder;