import React, { useState } from 'react'
import Song from './components/Song/Song'
import Player from './components/Player/Player'
import SideBar from './components/SideBar/SideBar'
import './components/styles/App.scss'
import Data from './data'

function App() {
    const [SongArray, setSongArray] = useState(Data())
    /* Nega "useState(Data())" oxiriga () qo'yildi chunki "./data" fayldan exportda funksiya export qilinmoqda funksiya oxirida esa doimo () qo'yiladi */
    const [currentSong, setCurrentSong] = useState(SongArray[0])
    /* bu useState da  useState(SongArray[0])  arraydagi 1 elementga tenglashmoqda*/
    const [isPlaying, setIsplaying] = useState()
    const [openlibrary, setOpenlibrary] = useState(false)
     
    return(
        <div className="App">
            <Song currentSong={currentSong}
             setOpenlibrary={setOpenlibrary} 
             openlibrary={openlibrary} 
            />
                                                     
            <Player
             currentSong={currentSong} 
             setCurrentSong={setCurrentSong}
             SongArray={SongArray}
             isPlaying={isPlaying} 
             setIsplaying={setIsplaying} />


            <SideBar  
            openlibrary={openlibrary} 
             setCurrentSong={setCurrentSong}
             SongArray={SongArray}/>
        </div>
    )
}

export default App
