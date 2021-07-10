export type InitialStateType = {
    isFetching: boolean
}
type ActionType = {
    type: "IS_LOADING"
    isFetching: boolean
}

const IS_LOADING = "IS_LOADING"

const initState = {
    isFetching: false
}


export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isFetching: boolean): ActionType => ({type: IS_LOADING, isFetching})