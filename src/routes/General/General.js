import React from "react";
import ContextData from "../../context/data/ContextData";

const General = () => {
    const {stateData} = React.useContext(ContextData)
    console.log(stateData)
    return (
        <div>General</div>
    )
}
export default General