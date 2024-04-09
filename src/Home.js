const Home = () => {
	function getStartedClick() {
		console.log("Hello, World!")
	}

	return (
		<div className="home">
			<p>Introducing "Randomize Series Episode" - the ultimate app for TV series enthusiasts who crave a dash of unpredictability in their viewing experience! Say goodbye to the indecision of choosing what episode to watch next. With our app, you can easily add your favorite TV series to a personalized database, including details such as the number of seasons and the length of each season. With just the click of a button, "Randomize Series Episode" will select an episode for you at random, turning every viewing into a surprise adventure.</p>
			<p>No more rewatching the same episodes unintentionally! Our app keeps track of which episodes you've seen, allowing you to mark them as watched. This ensures a fresh experience every time, as the app smartly navigates through your series list, picking episodes you haven't seen yet. Whether you're looking to rediscover a classic or keep up with your current obsession without the hassle of choosing, "Randomize Series Episode" is your go-to for making every TV series binge uniquely enjoyable. Dive into the randomness and let spontaneity guide your next watch!</p>
			<button className="getStarted" onClick={getStartedClick}>Get Started</button>
		</div>
	);
}
 
export default Home;