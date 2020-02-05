import {GET_INPUTVALUE, GET_API, GET_USERS, GET_INFO, SET_NEW_DATA} from './actions'

const initialState = {
    data: [],
    inputValue: '',
    page: 1, 
    loading: false,
    videosId: [],
    newData: []
}

export function dataReducer(state = initialState, action) {
    switch(action.type) {

        case GET_USERS: {
            return {
                ...state,
                loading: true
            }
        }

        case GET_INPUTVALUE: {
            return {
                ...state,
                inputValue: action.payload
            }
        }

        case GET_API: {
            return{
                ...state,
                data: [action.payload],
                loading: false,
            }
        }

        case GET_INFO:{
            return{
                ...state,
                videosId:  [...state.data[0].map(element => element.id.videoId)]
            }
        }

        case SET_NEW_DATA: {
            return{
                ...state,
                newData: action.payload
            }
        }

        default: return state
    }

}