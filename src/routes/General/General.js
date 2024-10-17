import React from "react";
import ContextData from "../../context/data/ContextData";
import GeneralView from "../../views/general/GeneralView";

const General = () => {
    const {stateData} = React.useContext(ContextData)
    console.log(stateData)
    return (
        <GeneralView/>
    )
}
export default General