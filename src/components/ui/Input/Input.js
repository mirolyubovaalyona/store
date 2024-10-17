import React from "react";

const Input = ({
    value,
    setValue,
    name,
    type
}) => {
   
    return (
        <div>
            <input
                value={value[name]}
                onChange={(e) =>{
                    setValue({
                        ...value,
                        [name]:e.target.value
                    })
                }}
                type={type}
            />
        </div>
    )
}
export default Input