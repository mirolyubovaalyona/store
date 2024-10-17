import React, { useState, useRef } from "react";
import Office from "../../layouts/office/Office";
import ReactPlayer from 'react-player';
import NET from "../../network";
import VideoControls from './VideoControls';
import classes from './../../styles/modules/video-styles.module.scss';


//страничка с видео

const Video = () => {
    const [state, setState] = useState({
        playing: false,
        volume: 0.5,
        loadedSeconds: 1,
        playedSeconds: 0,
    })

    const {
        playing,
        volume,
        loadedSeconds,
        playedSeconds
    } = state

    const handlePlay = ( ) => {
        setState({...state, playing: !state.playing})
    }

    const handleVolume = (e) => {
        setState({...state, volume: e.target.value})
    }

    const refPlayer = useRef()

    const handleProgress = (e) => {
        setState({...state, ...e})
    }

    const handleProgressControls = (e) => {
        refPlayer.current.seekTo(Number(e))
    }

    return(
        <Office>
            <div className={classes.videoWrapper}>
                <ReactPlayer url={`${NET.WEB_URL}/video.mp4`}
                    playing = {playing}
                    controls = {false}
                    width="100%"
                    volume = {volume}
                    ref = {refPlayer}
                    onProgress={handleProgress}
                />

                <VideoControls
                    classes = {classes}
                    handlePlay = {handlePlay}
                    playing = {playing}
                    handleVolume = {handleVolume}
                    volume = {volume}
                    loadedSeconds = {loadedSeconds}
                    playedSeconds = {playedSeconds}
                    funcs ={{
                        progress: handleProgressControls
                    }}
                />
            </div>   
       </Office>
    )
}
export default Video