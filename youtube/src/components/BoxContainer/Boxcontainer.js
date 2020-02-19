import React from 'react'
import Box from '../Box'
import Slider from '../Slider'
import styles from './BoxContainer.module.css'
import { useSelector, /*useDispatch*/ } from 'react-redux'

export default function BoxContainer(){

    const data = useSelector(state => state.data)
    const currentPageData = useSelector(state => state.currentPageData)
    console.log(currentPageData)

    return (
        <div>
            <div className = {styles.boxContainer}>
             {data.length === 0? '': currentPageData.map((element, index) =>
                    <Box index = {index} key = {index}>
                        <img src = {element.snippet.thumbnails.medium.url} alt = ''></img>
                        <p>{element.snippet.title}</p>
                        <p>{element.snippet.channelTitle}</p>
                    </Box>)}
            </div>
            {data.length === 0? '':<Slider></Slider>}
        </div>
    )
}