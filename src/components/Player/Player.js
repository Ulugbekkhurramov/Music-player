import React, { useState, useRef } from 'react'
import './player.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
// import Song from '../Song/Song'



const Player = ({currentSong, isPlaying, setIsplaying, setCurrentSong, SongArray }) =>{
    let audio = useRef("")
    let input = useRef("")
    let [time, setTime] = useState({
        current: 0,
        duration: 0 
    })
   
    function handleClick() {
        // let audio = document.getElementById( "music");
        setIsplaying(!isPlaying)
        if (isPlaying) {
            audio.current.pause()
            // setIsplaying(false)
    
        }else{
            // setIsplaying(true)
            audio.current.play()

        }
    }
    function secondsToTime(e){
        var 
        // h = Math.floor(e / 3600).toString().padStart(2,'0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');
        
        return  m + ':' + s;
    }
  
    function handlerTimeUpdate() {
        console.log('time is going')
       
        let clock = audio.current.currentTime
        let duration = audio.current.duration 
        setTime({ ...time, current:clock, duration:duration})
    }

    function handlerChange(e) {
        // console.log(e.target.value);
        audio.current.currentTime = e.target.value
    }
    // function skipSonghandler() {
    //     let indexsong = SongArray.findIndex( i => i.id === currentSong.id)
    //     setCurrentSong(SongArray[indexsong + 1])
    //     if (indexsong=SongArray.length-1) {
    //         indexsong=0;
    //     }
        
    // }
    // function skipMusichandler() {
    //     let indexsong = SongArray.findIndex( i=> i.id === currentSong.id)
    //     setCurrentSong(SongArray[indexsong - 1])
    //     // if (indexsong= SongArray[0]) {
    //     //     indexsong = [SongArray.length-1]
    //     // }
    // }
    // // console.log(input.current.value);

    
    function skipSonghandler(skip) {
        let indexsong = SongArray.findIndex( i=> i.id === currentSong.id)
        if (skip=== 'next') {
            setCurrentSong(SongArray[(indexsong + 1) % SongArray.length])
        }else if(skip=== 'prev'){
            setCurrentSong(SongArray[(indexsong - 1)])
            if (indexsong === 0 ) {
                setCurrentSong(SongArray[SongArray.length-1])
            }
        }
    }
    return(
        <div className="Player">
            <div className="player">
                <div className="time-control">
                    <p>{ secondsToTime( time.current)}</p>
                    <input type="range"
                    onChange={handlerChange}
                    max={time.duration}
                    min={0}
                    value={time.current}
                    ref={input}   
                    //   value={}  
                    ></input>
                    <p>{ secondsToTime(time.duration)}</p>
                </div>
                <div className="controller">
                    <audio id="music" src={currentSong.audio}></audio>
                    <FontAwesomeIcon onClick={()=> skipSonghandler('prev')} size="2x" icon={faAngleLeft} />
                    <FontAwesomeIcon id="average-icon" onClick={handleClick} size="2x" icon={isPlaying ? faPause : faPlay } />
                    <FontAwesomeIcon onClick={() => skipSonghandler('next')} size="2x" icon={faAngleRight} />
                </div>
                <audio 
                onLoadedData={handlerTimeUpdate}
                onTimeUpdate={handlerTimeUpdate} 
                ref={audio} 
                id="music"
                src={currentSong.audio}></audio>
            </div>
        </div>
    )
}

export default Player

