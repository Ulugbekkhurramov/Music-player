import React from 'react'
import './song.scss'

const Song = ({currentSong, openlibrary, setOpenlibrary}) => {
    function animationq() {
        setOpenlibrary(!openlibrary)
        // console.log('function is working');
    }

    return(
        <div className="Music">
            <div className="wawes">
               <h2>Waves</h2>
                <button id="buttons" onClick={animationq}>Library</button>
            </div>
            <div className="songContainer">
                <img src={currentSong.cover}></img>
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    )
}

export default Song