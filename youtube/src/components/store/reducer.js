import {GET_INPUTVALUE, GET_API, GET_USERS, GET_INFO, SET_NEW_DATA, CHANGE_PAGE, CHANGE_PAGE_DATA, NEW_DATA_FETCH} from './actions'

const initialState = {
    data: [],
    inputValue: '',
    currentPage: 0, 
    videosId: [],
    newData: [],
    pageAmount: [],
    pageArr: [],
    currentPageData: [],
    pageToken: '',
    loading: false,
}

export function dataReducer(state = initialState, action) {
    switch(action.type) {

        case GET_USERS: {
            return {
                ...state,
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
                data: [...state.data, ...[...action.payload.items]],
                pageToken: action.payload.code,
                loading: false,
            }
        }

        case GET_INFO:{
            return{
                ...state,
                videosId: [state.data.map(element => element.id.videoId)],
                pageAmount: state.data.length/5 ,
                currentPageData: state.data.slice(state.currentPage*5, state.currentPage*5 + 5),
            }
        }

        case SET_NEW_DATA: {
            return{
                ...state,
                newData: [...state.newData, ...action.payload],
                pageArr: state.data.slice(0, state.pageAmount),
                
            }
        }

        case CHANGE_PAGE: {
            return{
                ...state,
                currentPage: action.payload +1,
            }
        }

        case CHANGE_PAGE_DATA: {
            return{
                ...state,
                currentPageData: state.data.slice(state.currentPage*5, state.currentPage*5 + 5),
                loading: true
            }
        }

        case NEW_DATA_FETCH: {
            return{
                ...state,
            }
        }

        default: return state
    }

}