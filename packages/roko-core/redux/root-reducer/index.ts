import { combineReducers } from "redux";
import jollyAuthReducer from "../jolly/reducers/auth"

const rootReducer: any = combineReducers({
    jolly_auth: jollyAuthReducer
})

export default rootReducer