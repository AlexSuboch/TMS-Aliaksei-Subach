import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../store/actions'

export default function Box(props){
    const [data, setData] = useState(false)
    const newData = useSelector(state => state.newData)
    const dispatch = useDispatch()
    
    function abc (){
        dispatch(getInfo())
        setData(!data)
    }

    function abcc(){
        setData(!data)
    }

    return(
    <div>
        {data === false? props.children : 
         newData[props.index] === undefined? '':
            <div>
                <div>{newData[props.index].statistics.viewCount}</div>
                <div>{newData[props.index].statistics.likeCount}</div>
                <div>{newData[props.index].statistics.dislikeCount}</div>
                <div>{newData[props.index].statistics.commentCount}</div>
            </div>
        }
        <span onClick = {data === false ? abc: abcc}>{data === false? `description`: 'back'}</span>
    </div>
    )
}