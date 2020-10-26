import * as TYPES from "../../constants";
import "./index.d"

const initialState: IInitialState = {
    isLoading: false,
    user: {
        name: "",
        photo_url: "",
        email: "",
        _id: "",
        uid: ""
    },
    token: ""
}

function AuthReducer(state: IInitialState = initialState, action: IAction) {
    switch (action.type) {
        case TYPES.LOADING:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.ERROR:
            return {
                ...state,
                message: action.payload.message,
                isLoading: false
            }
        case TYPES.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.account,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default AuthReducer
