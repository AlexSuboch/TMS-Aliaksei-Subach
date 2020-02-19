import { applyMiddleware } from 'redux'
import { usersMiddleware } from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';


export const rootMiddleware = composeWithDevTools(applyMiddleware(usersMiddleware))