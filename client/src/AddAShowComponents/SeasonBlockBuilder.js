function SeasonBlockBuilder({ seasons }) {

	function toggleEdit() {

	}



    const seasonBlocks = Object.entries(seasons).map(([key, season]) => {
        
		const seasonNumber = season.id;
        const episodeCount = Object.entries(season.episodes).length;
        return (
            <div className="seasons" key={seasonNumber}>

                <div className="left">
                    <span className="season">Season {seasonNumber}</span>
                </div>

                <div className="right static">
                    <span>{episodeCount} episodes</span>
                    <button className="editTrigger" onClick={toggleEdit(this)}>Edit</button>
                </div>

				<div className="right edit hidden">
					<div className="seasonEpisodes">
						<input type="text" placeholder={episodeCount} />
						<span>episodes</span>
					</div>
					<button className="saveTrigger" onClick={toggleEdit(this)}>Save</button>
				</div>

            </div>
        );

    });

    return seasonBlocks;
}

export default SeasonBlockBuilder;
