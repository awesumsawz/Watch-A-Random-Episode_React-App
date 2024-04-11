const SeasonBuilder = () => {
	return (
		<div className="wrapper">
			<div className="seasons">
				<div className="left">
					<span className="season">Season 1</span>
				</div>
				<div className="right static">
					<span>23 episodes</span>
					<button className="editTrigger">Edit</button>
				</div>
			</div>
			<div className="seasons">
				<div className="left">
					<span className="season">Season 2</span>
				</div>
				<div className="right edit">
					<div className="seasonEpisodes">
						<span>How Many Episodes in Season 2?</span>
						<input type="text" />
					</div>
					<button className="addEpisodesButton">Save Episodes</button>
				</div>
			</div>
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
			<div className="seasons">
				<div className="left">
					<span className="season">Season 4</span>
				</div>
				<div className="right static">
					<span>23 episodes</span>
					<button className="editTrigger">Edit</button>
				</div>
			</div>
			<div className="seasons">
				<div className="left">
					<span className="season">Season 5</span>
				</div>
				<div className="right static">
					<span>23 episodes</span>
					<button className="editTrigger">Edit</button>
				</div>
			</div>
			<button id="addASeasonButton">+ Add A Season</button>
		</div>
	)
}

export default SeasonBuilder;