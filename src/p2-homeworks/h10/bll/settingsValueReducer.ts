import {v1} from "uuid";

export const minValueSettingID = v1();
export const maxValueSettingID = v1();
export const stepValueSettingID = v1();

export const CHANGE_VALUE_SETTING = "CHANGE_VALUE_SETTING"
export const CHANGE_VALUE_INPUT = "CHANGE_VALUE_INPUT"

export type SettingsType = {
    id: string
    description: string
    value: number
}

export type settingsInputType = {
    [key: string]: SettingsType
}
export type currentValueType = {
    min: number,
    max: number
}
export type InitialStateType = {
    settingsInput: settingsInputType
    currentValue: currentValueType
}
export type ActionsType =
    changeSettingValueACActionType
    | changeInputValueACActionType

export type changeSettingValueACActionType = {
    type: "CHANGE_VALUE_SETTING"
    value: number
    id: string
}
export type changeInputValueACActionType = {
    type: "CHANGE_VALUE_INPUT"
    minValue: number
    maxValue?: number

}

const initState: InitialStateType = {
    settingsInput: {
        [minValueSettingID]:
            {id: minValueSettingID, description: "Min value: ", value: 0},
        [maxValueSettingID]:
            {id: maxValueSettingID, description: "Max value: ", value: 100},
        [stepValueSettingID]:
            {id: stepValueSettingID, description: "Step: ", value: 1}
    },
    currentValue: {
        min: 0,
        max: 100
    }
}
export const settingsValueReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "CHANGE_VALUE_SETTING": {
            return {
                ...state,
                settingsInput: {
                    ...state.settingsInput,
                    [action.id]: {...state.settingsInput[action.id], value: action.value}
                }
            }
        }
        case "CHANGE_VALUE_INPUT": {
            return {
                ...state,
                currentValue: {
                    ...state.currentValue,
                    min: action.minValue,
                    max: action.maxValue ? action.maxValue : state.currentValue.max
                }
            }
        }
        default:
            return state
    }
}

export const changeSettingValueAC = (value: number, inputID: string): changeSettingValueACActionType =>
    ({type: CHANGE_VALUE_SETTING, value, id: inputID})
export const changeInputValueAC = (minValue: number, maxValue?: number): changeInputValueACActionType =>
    ({type: CHANGE_VALUE_INPUT, minValue, maxValue})

