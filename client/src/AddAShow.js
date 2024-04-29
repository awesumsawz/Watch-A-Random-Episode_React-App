import { useState, useEffect } from "react";
import SaveSeriesName from "./AddAShowComponents/SaveSeriesName";
import SeasonBuilder from "./AddAShowComponents/SeasonBuilder";

const AddAShow = () => {
	const [series, setSeries] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/series")
		.then(res => {
			return res.json()
		})
		.then(data=> {
			setSeries(data)
		})
	}, []); //The empty dependency array restricts builds to initial only

	return (
		<div className="addAShow">
			<h2>Add A Series</h2>
			<div className="container viewOne">
				<SaveSeriesName />
				{series && <SeasonBuilder targetSeries="parks_and_recreation" seriesList={series} />}
				<div className="buttons">
					<button id="saveSeriesButton">Save Series</button>
				</div>
			</div>
			{/* <div className="container viewTwo">
				<div className="top">
					<span style={{fontWeight: "900", fontSize: "20px"}}>Series 1</span>
					<span>Has Been Saved to the Database</span>
				</div>
				<div className="wrapper">
					<div className="seasonAndEpCount">
						<span>Season 1</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 2</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 3</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 4</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 5</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 6</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 7</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 8</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 9</span>
						<span>23 Episodes</span>
					</div>
					<div className="seasonAndEpCount">
						<span>Season 10</span>
						<span>23 Episodes</span>
					</div>
				</div>
				<div className="buttons">
					<button className="new">Create Another Series</button>
					<button className="edit">Edit This Series</button>
				</div>
			</div> */}
		</div>
	);
}
 
export default AddAShow;