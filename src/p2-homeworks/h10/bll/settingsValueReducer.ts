import {v1} from "uuid";

export type StateType = {
    id: string
    text: string
    value: number
    action: (value: number, id: string) => ActionType
}
export type InitialStateType = {
    [key: string]: StateType
}
export type ActionType = {
    type: "MIN_VALUE" | "MAX_VALUE" | "RANGE_VALUE"
    value: number
    id: string
}
export const minValue = v1();
export const maxValue = v1();
export const rangeValue = v1();


const MIN_VALUE = "MIN_VALUE"
const MAX_VALUE = "MAX_VALUE"
const RANGE_VALUE = "RANGE_VALUE"

export const minValueAC = (value: number, id: string): ActionType => ({type: MIN_VALUE, value, id})
export const maxValueAC = (value: number, id: string): ActionType => ({type: MAX_VALUE, value, id})
export const rangeValueAC = (value: number, id: string): ActionType => ({type: RANGE_VALUE, value, id})

const initState: InitialStateType = {
    [minValue]: {id: minValue, text: "Min value: ", value: 0, action: minValueAC},
    [maxValue]: {id: maxValue, text: "Max value: ", value: 100, action: maxValueAC},
    [rangeValue]: {id: rangeValue, text: "Step: ", value: 1, action: rangeValueAC}
}

export const settingsValueReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => {
    function destructuringObject() {
        return {
            ...state,
            [action.id]: {...state[action.id], value: action.value}
        }
    }
    switch (action.type) {
        case MIN_VALUE: {
            if (state[maxValue].value <= action.value || action.value < 0) return state
            return destructuringObject()
        }
        case MAX_VALUE: {
            if (state[minValue].value >= action.value) return state
            return destructuringObject()
        }
        case RANGE_VALUE: {
            if( action.value <= 0) return state
            return destructuringObject()
        }
        default:
            return state
    }
}

