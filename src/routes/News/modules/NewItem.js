import React from 'react'
import classes from './../news.module.scss'
import Image from './../../../components/ui/image/index'
import Title from './../../../components/ui/title/index'
import TextCenter from './../../../components/ui/text/index'

const NewItem =({data})=>{
    return(
        <div  className={classes.news}>
            <Image sizeWidth = "40%" >
                <img src = {data.img}/>
            </Image>

            <div className={classes.news_body}>
                <Title>
                    <div>{data.title}</div>
                </Title>
                <TextCenter>
                    {data.sudtitle}
                </TextCenter>
            </div>
                
            
            
        </div>
    )
}

export default NewItem