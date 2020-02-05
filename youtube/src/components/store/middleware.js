import {getApi, GET_USERS, GET_INFO, getInfo, setNewData } from './actions'

export const usersMiddleware = store => next => action => {
    if(action.type === GET_USERS) {
        const { inputValue } = store.getState()

        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCdGuENDcABWdYbQnWovMxCX4JwJQ2QZ40&type=video&part=snippet&maxResults=15&q=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            store.dispatch(getApi(data.items))
            store.dispatch(getInfo())
        })
    }

    if(action.type === GET_INFO){
        const { videosId } = store.getState() 
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCdGuENDcABWdYbQnWovMxCX4JwJQ2QZ40&id=${videosId}&part=snippet,statistics`)
        .then(res => res.json())
        .then(newData =>{
            store.dispatch(setNewData(newData.items))
        })
    }

    
    next(action)
}