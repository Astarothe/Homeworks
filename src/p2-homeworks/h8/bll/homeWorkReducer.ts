import {UserType} from "../HW8";

type SortActionType = {
    type: "sort"
    payload: "up" | "down"
}

type CheckActionType = {
    type: "check"
    payload: number
}


type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") return [...state
                .sort((a, b) => a.name > b.name ? 1 : -1)]

            return [...state
                .sort((a, b) => a.name > b.name ? -1 : 1)]
        }
        case 'check': {
            return [...state.filter(u => u.age >= 18)]
        }
        default:
            return state
    }
}