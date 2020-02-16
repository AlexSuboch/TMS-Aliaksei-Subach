import React from 'react';
import { getInputvalue, getUsers } from '../store/actions'
import { useDispatch } from 'react-redux'

export default function Form(){

    const dispatch = useDispatch()
    
    function changeInputvalue(event){
        dispatch(getInputvalue(event.target.value))
    }
    
    return(
        <div>
            <input onChange = {changeInputvalue}></input>
            <button onClick = {() => dispatch(getUsers())}></button>
        </div>
    )
}