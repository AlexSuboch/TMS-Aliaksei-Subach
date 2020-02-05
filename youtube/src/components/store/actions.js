export const GET_INPUTVALUE = 'GET_INPUTVALUE'
export const GET_API = 'GET_API'
export const GET_USERS = 'GET_USERS'
export const GET_INFO = 'GET_INFO'
export const SET_NEW_DATA = 'SET_NEW_DATA'

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