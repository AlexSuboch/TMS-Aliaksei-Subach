import React from 'react'
import Box from '../Box'
import styles from './BoxContainer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getInfo } from '../store/actions'

export default function BoxContainer(){

    let dispatch = useDispatch()

    let data = useSelector(state => state.data)
    let videosID = useSelector(state => state.videosId)
    let newData = useSelector(state => state.newData)

    console.log(data)
    console.log(videosID)
    console.log(newData)

    return (
        <div className = {styles.boxContainer}>
         {data.length === 0? '': data[0].map((element, index) =>
                <Box index = {index} key = {index}>
                    <img src = {element.snippet.thumbnails.medium.url} alt = ''></img>
                    <p>{element.snippet.title}</p>
                    <p>{element.snippet.channelTitle}</p>
                </Box>)}
        </div>
    )
}