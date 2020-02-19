import {getApi, GET_USERS, GET_INFO, getInfo, setNewData, NEW_DATA_FETCH } from './actions'

export const usersMiddleware = store => next => action => {

    const { loading, currentPage } = store.getState()

    if(action.type === GET_USERS || (action.type === NEW_DATA_FETCH && loading && currentPage %(2 || 5)  === 0) ) {
        const { pageToken, inputValue } = store.getState()

        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBqr_gc97vV8kOv_wV41oHWsGolcIW8o-A&type=video&part=snippet&maxResults=15&q=${inputValue}&pageToken=${pageToken}`)
        .then(res => res.json())
        .then(data => {
            store.dispatch(getApi({items: data.items, code: data.nextPageToken}))
            store.dispatch(getInfo())
            console.log(data.items)
        })
    }

    if(action.type === GET_INFO){
        const { videosId } = store.getState()
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBqr_gc97vV8kOv_wV41oHWsGolcIW8o-A&id=${videosId}&part=snippet,statistics`)
        .then(res => res.json())
        .then(newData =>{
            store.dispatch(setNewData(newData.items))
        })
    }

    next(action)
}
