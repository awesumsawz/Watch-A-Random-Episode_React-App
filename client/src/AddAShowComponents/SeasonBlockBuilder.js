import React, { useState } from 'react';

function SeasonBlockBuilder({ seriesTitle, seasons }) {
    const [editModes, setEditModes] = useState({});
    const [episodeCounts, setEpisodeCounts] = useState({});

    function toggleEdit(seasonId) {
        setEditModes(prevModes => ({
            ...prevModes,
            [seasonId]: !prevModes[seasonId]
        }));
    }

    function handleEpisodeChange(seasonId, value) {
        setEpisodeCounts(prevCounts => ({
            ...prevCounts,
            [seasonId]: value
        }));
    }

    async function saveEpisodes(seriesTitle, seasonId) {
		console.log(seriesTitle);
		console.log(seasonId);
        const episodes = episodeCounts[seasonId];
        if (episodes !== undefined) {
            try {
                const response = await fetch(`http://localhost:8000/series/${seriesTitle}/seasons/${seasonId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ episodes })
                });

                if (response.ok) {
                    console.log("Episodes updated successfully!");
                    toggleEdit(seasonId); // Toggle edit mode off after save
                } else {
                    console.error("Failed to update episodes:", await response.text());
                }
            } catch (error) {
                console.error("Error updating episodes:", error);
            }
        } else {
			console.log("No new episode count to update; exiting")
			toggleEdit(seasonId);
		}
    }

    const seasonBlocks = Object.values(seasons).map((season) => {
        const seasonId = season.id.toString();
        const isEditing = editModes[seasonId];
        const currentEpisodes = episodeCounts[seasonId] || season.episodes;

        return (
            <div className="seasons" key={seasonId}>
                <div className="left">
                    <span className="season">Season {season.id}</span>
                </div>
                <div className={`right ${isEditing ? 'edit' : 'static'}`}>
                    {isEditing ? (
                        <>
                            <div className="seasonEpisodes">
                                <input type="number" value={currentEpisodes}
                                    onChange={(e) => handleEpisodeChange(seasonId, parseInt(e.target.value, 10))}
                                />
                                <span>episodes</span>
                            </div>
                            <button className="saveTrigger" onClick={() => saveEpisodes(seriesTitle, seasonId)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span>{currentEpisodes} episodes</span>
                            <button className="editTrigger" onClick={() => toggleEdit(seasonId)}>Edit</button>
                        </>
                    )}
                </div>
            </div>
        );
    });

    return <>{seasonBlocks}</>;
}

export default SeasonBlockBuilder;
