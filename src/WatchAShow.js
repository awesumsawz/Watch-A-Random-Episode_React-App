const WatchAShow = () => {
	return (
		<div className="watchAShow">
			<h2>Watch A Series</h2>
			<div className="container">
				{/* <div className="wrapper viewOne">
					<div className="series">
						<button className="watch">Watch</button>
						<span>Echoes of Tomorrow</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>The Last Alchemist</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>This Is A Very Long Name Much Longer than the Other one and is way too long to not be wrapped: I need to fix this if I want this to not look bad</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Neon Shadows</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Aether Bound</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Chronicle of the Forgotten</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Quantum Requiem</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Lunar Dynasty</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Mystics of the Fringe</span>
					</div>
					<div className="series">
						<button className="watch">Watch</button>
						<span>Guardians of the Abyss</span>
					</div>
				</div> */}
				<div className="wrapper viewTwo">
					<div className="top">
						<span>Echoes of Tomorrow</span>
						<button className="editButton">Edit Series</button>
					</div>
					<div className="seasonsAndEps">
						<div className="season">
							<div className="left">
								<span className="seasonName">
									Season 1
								</span>
								<span className="note">
									Click on an episode to toggle watched and unwatched
								</span>
							</div>
							<div className="right">
								<button>Ep.1</button>
								<button className="watched">Ep.2</button>
								<button>Ep.3</button>
								<button>Ep.4</button>
								<button>Ep.5</button>
								<button>Ep.6</button>
								<button>Ep.7</button>
								<button>Ep.8</button>
								<button className="watched">Ep.9</button>
								<button>Ep.10</button>
								<button>Ep.11</button>
								<button>Ep.12</button>
								<button>Ep.13</button>
								<button>Ep.14</button>
								<button>Ep.15</button>
								<button>Ep.16</button>
								<button>Ep.17</button>
								<button className="watched">Ep.18</button>
								<button>Ep.19</button>
								<button>Ep.20</button>
								<button>Ep.21</button>
								<button>Ep.22</button>
								<button>Ep.23</button>
							</div>
						</div>
						<div className="season">
							<div className="left">
								<span className="seasonName">
									Season 1
								</span>
								<span className="note">
									Click on an episode to toggle watched and unwatched
								</span>
							</div>
							<div className="right">
								<button>Ep.1</button>
								<button>Ep.2</button>
								<button>Ep.3</button>
								<button>Ep.4</button>
								<button>Ep.5</button>
								<button className="watched">Ep.6</button>
								<button>Ep.7</button>
								<button>Ep.8</button>
								<button>Ep.9</button>
								<button>Ep.10</button>
								<button>Ep.11</button>
								<button>Ep.12</button>
								<button>Ep.13</button>
								<button>Ep.14</button>
								<button>Ep.15</button>
								<button>Ep.16</button>
								<button>Ep.17</button>
								<button>Ep.18</button>
								<button>Ep.19</button>
								<button>Ep.20</button>
								<button className="watched">Ep.21</button>
								<button>Ep.22</button>
								<button>Ep.23</button>
								<button>Ep.24</button>
								<button>Ep.25</button>
								<button className="watched">Ep.26</button>
								<button>Ep.27</button>
								<button>Ep.28</button>
								<button>Ep.29</button>
								<button>Ep.30</button>
								<button>Ep.31</button>
								<button>Ep.32</button>
								<button>Ep.33</button>
								<button>Ep.34</button>
								<button>Ep.35</button>
								<button>Ep.36</button>
								<button>Ep.37</button>
								<button>Ep.38</button>
								<button className="watched">Ep.39</button>
								<button>Ep.40</button>
								<button>Ep.41</button>
								<button>Ep.42</button>
								<button>Ep.43</button>
								<button>Ep.44</button>
								<button>Ep.45</button>
								<button className="watched">Ep.46</button>
								<button>Ep.47</button>
								<button>Ep.48</button>
								<button>Ep.49</button>
								<button>Ep.50</button>
								<button>Ep.51</button>
								<button>Ep.52</button>
								<button className="watched">Ep.53</button>
								<button>Ep.54</button>
								<button>Ep.55</button>
								<button>Ep.56</button>
							</div>
						</div>
						<div className="season">
							<div className="left">
								<span className="seasonName">
									Season 1
								</span>
								<span className="note">
									Click on an episode to toggle watched and unwatched
								</span>
							</div>
							<div className="right">
								<button>Ep.1</button>
								<button>Ep.2</button>
								<button>Ep.3</button>
								<button>Ep.4</button>
								<button>Ep.5</button>
								<button className="watched">Ep.6</button>
								<button>Ep.7</button>
								<button>Ep.8</button>
								<button>Ep.9</button>
								<button>Ep.10</button>
								<button>Ep.11</button>
								<button>Ep.12</button>
								<button>Ep.13</button>
								<button>Ep.14</button>
								<button>Ep.15</button>
								<button>Ep.16</button>
								<button>Ep.17</button>
								<button>Ep.18</button>
								<button>Ep.19</button>
								<button>Ep.20</button>
								<button>Ep.21</button>
								<button>Ep.22</button>
								<button>Ep.23</button>
								<button>Ep.24</button>
								<button className="watched">Ep.25</button>
								<button>Ep.26</button>
								<button>Ep.27</button>
								<button>Ep.28</button>
								<button>Ep.29</button>
								<button>Ep.30</button>
								<button>Ep.31</button>
								<button className="watched">Ep.32</button>
								<button>Ep.33</button>
								<button>Ep.34</button>
								<button>Ep.35</button>
								<button>Ep.36</button>
							</div>
						</div>
						<div className="season">
							<div className="left">
								<span className="seasonName">
									Season 1
								</span>
								<span className="note">
									Click on an episode to toggle watched and unwatched
								</span>
							</div>
							<div className="right">
								<button>Ep.1</button>
								<button>Ep.2</button>
								<button>Ep.3</button>
								<button>Ep.4</button>
								<button className="watched">Ep.5</button>
								<button>Ep.6</button>
								<button>Ep.7</button>
								<button>Ep.8</button>
								<button>Ep.9</button>
								<button>Ep.10</button>
								<button>Ep.11</button>
								<button>Ep.12</button>
								<button>Ep.13</button>
								<button>Ep.14</button>
								<button>Ep.15</button>
								<button>Ep.16</button>
								<button>Ep.17</button>
								<button>Ep.18</button>
								<button>Ep.19</button>
								<button>Ep.20</button>
								<button>Ep.21</button>
								<button>Ep.22</button>
								<button className="watched">Ep.23</button>
								<button>Ep.24</button>
								<button>Ep.25</button>
								<button>Ep.26</button>
								<button>Ep.27</button>
								<button>Ep.28</button>
								<button>Ep.29</button>
								<button>Ep.30</button>
								<button>Ep.31</button>
								<button className="watched">Ep.32</button>
								<button>Ep.33</button>
								<button>Ep.34</button>
								<button>Ep.35</button>
								<button>Ep.36</button>
								<button>Ep.37</button>
								<button>Ep.38</button>
								<button>Ep.39</button>
								<button>Ep.40</button>
								<button>Ep.41</button>
							</div>
						</div>
					</div>
					<div className="buttons">
						<button className="random">Roll The Dice</button>
						<button className="return">Return to List</button>
					</div>
				</div>
				{/* <div className="wrapper viewThree">
					<div className="top">
						<span>Echoes of Tomorrow</span>
						<button className="editButton">Edit Series</button>
					</div>
					<div className="watchBody">
						<span>You Should Watch...</span>
						<span>Season 3</span>
						<span>Episode 24</span>
					</div>
					<div className="buttons">
						<button className="markAsWatched">Roll The Dice</button>
						<button className="rollAgain">Roll The Dice</button>
						<button className="return">Return to List</button>
					</div>
				</div> */}
			</div>
		</div>
	);
}
 
export default WatchAShow;