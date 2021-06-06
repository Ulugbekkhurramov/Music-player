import React from 'react'
import SidebarSong from '../SideBarSong/SideBarSong'
import './sideBar.scss'

const SideBar = ({SongArray, setCurrentSong, openlibrary}) => {

    return(
        <div className={`Library ${openlibrary ? "" : 'showcase'}`}>
            <h1>Library</h1>
            {SongArray.map(el=>{
                return(
                    <SidebarSong setCurrentSong={setCurrentSong} el={el} />
                )
            })}
        </div>
    )
}

export default SideBar;