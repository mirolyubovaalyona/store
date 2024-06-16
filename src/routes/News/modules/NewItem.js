import React from 'react'
import classes from './../news.module.scss'
import Image from './../../../components/ui/image/index'
import Title from './../../../components/ui/title/index'
import TextCenter from './../../../components/ui/text/index'

const NewItem =({data})=>{
    return(
        <div  className={classes.news}>

            <div className={classes.news_body}>
                <Title>
                    <div>{data.title}</div>
                </Title>
                <TextCenter>
                    {data.description}
                </TextCenter>
            </div>
                
            <Image sizeWidth = "40%" >
                <img src = {data.image}/>
            </Image>
            
        </div>
    )
}

export default NewItem