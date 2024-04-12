function SeasonBlockBuilder({seasons}) {
    const seasonBlocks = [];

	for( let key in seasons ) {
		const season = seasons[key];
		const seasonNumber = season.id;
		const episodeCount = Object.entries(season.episodes).length;

		seasonBlocks.push(
            <div className="seasons" key={seasonNumber}>
				<div className="left">
					<span className="season">Season {seasonNumber}</span>
				</div>
				<div className="right static">
					<span>{episodeCount} episodes</span>
					<button className="editTrigger">Edit</button>
				</div>
			</div>
		)
	}

	return seasonBlocks;
}
export default SeasonBlockBuilder;