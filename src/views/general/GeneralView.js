import React, { useState } from "react";
import classes from './../../styles/views/general-styles.module.scss'
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

const GeneralView = () => {
    const [value, setValue] = useState({})

    const sendValue = () => {
        console.log('sending')
    }
    return (
        <div className={classes.wrapper}>
            <div>
                <div>Вход в систему</div>
                <div>
                    <Input
                        value={value}
                        setValue={setValue}
                        name = 'login'
                        type = 'text'
                    />
                    <Input
                        value={value}
                        setValue={setValue}
                        name = 'password'
                        type = 'password'
                    />
                </div>
                <div>
                    <Button
                        text='Вход'
                        onClick = {sendValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default GeneralView