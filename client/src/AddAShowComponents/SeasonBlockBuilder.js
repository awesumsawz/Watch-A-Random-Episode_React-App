import React, { useState } from 'react';

function SeasonBlockBuilder({ seasons }) {
    const [editModes, setEditModes] = useState({});

    function toggleEdit(seasonId) {
        setEditModes(prevModes => ({
            ...prevModes,
            [seasonId]: !prevModes[seasonId]
        }));
    }

    const seasonBlocks = Object.entries(seasons).map(([key, season]) => {
        const seasonNumber = season.id;
        const episodeCount = Object.entries(season.episodes).length;
        const isEditing = editModes[seasonNumber];

        return (
            <div className="seasons" key={seasonNumber}>
                <div className="left">
                    <span className="season">Season {seasonNumber}</span>
                </div>
                <div className={`right ${isEditing ? 'edit' : 'static'}`}>
                    {isEditing ? (
                        <>
                            <div className="seasonEpisodes">
                                <input type="text" defaultValue={episodeCount} />
                                <span>episodes</span>
                            </div>
                            <button className="saveTrigger" onClick={() => toggleEdit(seasonNumber)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span>{episodeCount} episodes</span>
                            <button className="editTrigger" onClick={() => toggleEdit(seasonNumber)}>Edit</button>
                        </>
                    )}
                </div>
            </div>
        );
    });

    return <>{seasonBlocks}</>;
}

export default SeasonBlockBuilder;