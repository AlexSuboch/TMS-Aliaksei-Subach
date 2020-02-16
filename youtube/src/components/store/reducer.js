import {GET_INPUTVALUE, GET_API, GET_USERS, GET_INFO, SET_NEW_DATA, CHANGE_PAGE, CHANGE_PAGE_DATA} from './actions'

const initialState = {
    data: [],
    inputValue: '',
    currentPage: 0, 
    videosId: [],
    newData: [],
    pageAmount: [],
    pageArr: [],
    currentPageData: []
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
                data: [action.payload],
            }
        }

        case GET_INFO:{
            return{
                ...state,
                videosId:  [...state.data[0].map(element => element.id.videoId)],
                pageAmount: state.data[0].length/5,
                currentPageData: state.data[0].slice(0, 5)
            }
        }

        case SET_NEW_DATA: {
            return{
                ...state,
                newData: action.payload,
                pageArr: state.data[0].slice(0, state.pageAmount)
            }
        }

        case CHANGE_PAGE: {
            return{
                ...state,
                currentPage: action.payload,
            }
        }

        case CHANGE_PAGE_DATA: {
            return{
                ...state,
                currentPageData: state.data[0].slice(state.currentPage*5, state.currentPage*5 + 5)
            }
        }


        default: return state
    }

}