import { createStore, applyMiddleware } from "redux"
// import { createDevTools } from "redux-devtools"
import thunk from "redux-thunk"

import RootReducer from "../root-reducer"

const middleware = [thunk];

const store: any = createStore(
    RootReducer, {}, applyMiddleware(...middleware)
)

export default store