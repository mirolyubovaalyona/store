import React from "react";
import Navbar from './../../modules/navigation/Navbar';
import classes from './../../style.module.scss';
import Header from "../../modules/navigation/Header";
import ContextData from './../../context/data/ContextData';

const News = () => {
    const {stateData, dispatchData} = React.useContext(ContextData)
    const news = stateData.news
    React.useEffect(() => {
        const fetchNews = async() => {
            try {
                const response = await fetch('http://127.0.0.1:3004/news')
                if (response.status === 200 ) {
                    const result =  await response.json() // работает только если дожидаться ответ
                    dispatchData({
                        type: "FETCH_NEWS",
                        payload: result
                    })
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchNews()
    },[])

    return(
        <div>
            <div className={classes.main}>
                <div className={classes.main_Navigation}><Navbar /></div>
                <div className={classes.main_Content}>
                    <Header />
                    { news.map((elem, index) => {
                        return (
                            <div key={index}>
                                <div>{elem.title}</div>
                                <div>{elem.description}</div>
                                <div><img src = {elem.image}/></div>
                            </div>
                        )
                    })}
                </div>
            </div>           
        </div>
    )
}
export default News