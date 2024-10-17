import React from "react";

const ProgressBar = ({
    loadedSeconds,
    playedSeconds,
    classes,
    funcChange
}) => {
    return(
       
            <div>
                <input type="range"  
                    value={playedSeconds}
                    min = "0" 
                    max = {loadedSeconds} 
                    step = "0.1"
                    className= {classes.videoControlsProgressBar}
                    onChange={(e) => funcChange(e.target.value)}
            />
        </div>
       
    )
}

export default ProgressBar