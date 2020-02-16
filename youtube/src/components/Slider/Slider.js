import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Slider.module.css'
import { changePage, changePageData } from '../store/actions'



export default function Slider(props){

    const pageArr = useSelector(state => state.pageArr)
    let dispatch = useDispatch()

    return(
        <div className = {styles.buttonContainer}>
            {pageArr.map((element, index) => <div index = {index} onClick = {() => {
                dispatch(changePage(index))
                dispatch(changePageData())
                }
            }
            className = {styles.button} key = {index}>{index + 1}</div>)}
        </div>
    )
}