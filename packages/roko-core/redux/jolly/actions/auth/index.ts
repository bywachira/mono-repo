import axios from "axios"
import * as TYPES from "../../constants"
import config from "../../../../config";

export function authenticate(payload: IAuthPayload) {
    return async (dispatch: Function) => {
        axios.post(`${config.jollyApi}/api/access`, payload)
            .then(res => {
                dispatch({
                    type: TYPES.AUTH_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: TYPES.ERROR,
                    payload: err.response.data
                })
            })
    }
}