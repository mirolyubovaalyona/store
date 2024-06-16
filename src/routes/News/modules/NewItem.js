import React from 'react'
import classes from './../news.module.scss'
import Image from './../../../components/ui/image/index'
import Title from './../../../components/ui/title/index'

const NewItem =({data})=>{
    return(
        <div  className={classes.news}>
            <Title>
                <div>{data.title}</div>
            </Title>
            <div>{data.description}</div>
            <Image sizeWidth = "40%" >
                <img src = {data.image}/>
            </Image>
        </div>
    )
}

export default NewItem