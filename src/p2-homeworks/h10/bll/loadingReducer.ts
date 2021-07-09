const IS_FETCHING = "IS_FETCHING" as const

type InitialStateType = {
    isFetching: boolean
}

type ActionPropsType = ReturnType<typeof loadingAC>

const initState = {
    isFetching: false
}

export const loadingReducer = (state: InitialStateType = initState, action: ActionPropsType): InitialStateType => { // fix any
    switch (action.type) {
        case IS_FETCHING: {
            return {...state,
                isFetching: action.isFetching}
        }
        default: return state
    }
}

export const loadingAC = (isFetching: boolean): {type:string, isFetching:boolean} => ({type:IS_FETCHING, isFetching}) // fix any