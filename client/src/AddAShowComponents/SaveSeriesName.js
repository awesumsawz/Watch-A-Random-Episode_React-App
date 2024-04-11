import { useState } from "react";

const SaveSeriesName = () => {

	const [seriesName, setSeriesName] = useState('Top Gun: Mavric')

	function saveSeriesName() {
		setSeriesName("Predator");
		console.log(seriesName);
	}

	return (
		<form className="top">
			<input id="seriesNameInput" type="text" placeholder={seriesName} />
			<button id="saveSeriesNameButton" onClick={saveSeriesName}>Save Series Name</button>
		</form>
	)
}

export default SaveSeriesName;