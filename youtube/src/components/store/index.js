import { createStore } from 'redux'
import { dataReducer } from './reducer'
import { rootMiddleware } from './rootMiddleware'

export const store = createStore(dataReducer, rootMiddleware)