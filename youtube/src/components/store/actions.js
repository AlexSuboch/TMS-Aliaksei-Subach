export const GET_INPUTVALUE = 'GET_INPUTVALUE'
export const GET_API = 'GET_API'
export const GET_USERS = 'GET_USERS'
export const GET_INFO = 'GET_INFO'
export const SET_NEW_DATA = 'SET_NEW_DATA'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const CHANGE_PAGE_DATA = 'CHANGE_PAGE_DATA'
export const NEW_DATA_FETCH = 'NEW_DATA_FETCH'

export function getInputvalue(payload){
    return{
        type: GET_INPUTVALUE,
        payload: payload
    }
}

export function getApi(payload){
    return{
        type: GET_API,
        payload: payload
    }
}

export function getUsers(payload){
    return{
        type: GET_USERS,
        payload: payload
    }
}

export function getInfo(payload){
    return{
        type: GET_INFO,
        payload: payload
    }
}

export function setNewData(payload){
    return{
        type: SET_NEW_DATA,
        payload: payload
    }
}

export function changePage(payload){
    return{
        type: CHANGE_PAGE,
        payload: payload
    }
}

export function changePageData(payload){
    return{
        type: CHANGE_PAGE_DATA,
        payload: payload
    }
}

export function newDataFetch(payload){
    return{
        type: NEW_DATA_FETCH,
        payload: payload
    }
}