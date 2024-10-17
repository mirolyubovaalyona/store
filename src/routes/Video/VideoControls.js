import React from "react";
import ProgressBar from './components/ProgressBar';

//Контоль воспроизводящегося виео

const VideoControls = ({
    classes,
    handlePlay,
    handleVolume,
    playing,
    volume,
    loadedSeconds,
    playedSeconds,
    funcs
}) => {
    return (
        <>
            <div 
                className={classes.videoControlsPlay}
                onClick={handlePlay}
            > 
                {playing ? 'Pause' : 'Play'}
            </div>
            <div 
                className={classes.videoControls}
                >
                <input type="range"  
                    value={volume}
                    min = "0" 
                    max = "1" 
                    step = "0.05" 
                    onChange={handleVolume}
                />

                <ProgressBar
                    classes = {classes}
                    loadedSeconds = {loadedSeconds}
                    playedSeconds = {playedSeconds}
                    funcChange = {funcs.progress}
                />
               

            </div>
        </>
        
    )
}

export default VideoControls