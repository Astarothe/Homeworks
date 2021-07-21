import {v1} from "uuid";

export type SettingsType = {
    id: string
    description: string
    value: number
    action: (value: number, id: string) => SettingActionType
}
export type InitialStateType = {
    settingsInput: {
        [key: string]: SettingsType
    }
    currentValue: {
        min: number,
        max: number
    }
}
export type ActionsType =
    ReturnType<typeof changeMinValueAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeStepValueAC>
    | ReturnType<typeof changeValueInputAC>

export type SettingActionType = {
    type: "MIN_VALUE_SETTING" | "MAX_VALUE_SETTING" | "RANGE_VALUE_SETTING"
    value: number
    id: string
}
export type ChangeValueActionType = {
    type: "CHANGE_INPUT_VALUE"
    valueMin: number
    valueMax?: number
}

export type allAction = SettingActionType | ChangeValueActionType

export const minValueSettingID = v1();
export const maxValueSettingID = v1();
export const stepValueSettingID = v1();


const MIN_VALUE_SETTING = "MIN_VALUE_SETTING"
const MAX_VALUE_SETTING = "MAX_VALUE_SETTING"
const RANGE_VALUE_SETTING = "RANGE_VALUE_SETTING"
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE"

export const changeMinValueAC = (value: number, inputID: string): SettingActionType =>
    ({type: MIN_VALUE_SETTING, value, id: inputID})
export const changeMaxValueAC = (value: number, valueID: string): SettingActionType =>
    ({type: MAX_VALUE_SETTING, value, id: valueID})

export const changeStepValueAC = (value: number, valueID: string): SettingActionType =>
    ({type: RANGE_VALUE_SETTING, value, id: valueID})

export const changeValueInputAC = (changeCurrentMinValue: number, changeCurrentMaxValue?: number): ChangeValueActionType => ({
    type: CHANGE_INPUT_VALUE,
    valueMin: changeCurrentMinValue,
    valueMax: changeCurrentMaxValue
})

const initState: InitialStateType = {
    settingsInput: {
        [minValueSettingID]:
            {id: minValueSettingID, description: "Min value: ", value: 0, action: changeMinValueAC},
        [maxValueSettingID]:
            {id: maxValueSettingID, description: "Max value: ", value: 100, action: changeMaxValueAC},
        [stepValueSettingID]:
            {id: stepValueSettingID, description: "Step: ", value: 1, action: changeStepValueAC}
    },
    currentValue: {
        min: 0,
        max: 100
    }
}
export const settingsValueReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => {
    const maxValueSettings = state.settingsInput[maxValueSettingID].value;
    const minValueSettings = state.settingsInput[minValueSettingID].value;
    const stepValueSettings = state.settingsInput[stepValueSettingID].value;
    const minValueCurrent = state.currentValue.min;
    const maxValueCurrent = state.currentValue.max;

    const changeSettingsValue = (action: SettingActionType, stateCopy: InitialStateType = state) => {
        return {
            ...stateCopy,
            settingsInput: {
                ...stateCopy.settingsInput,
                [action.id]: {...stateCopy.settingsInput[action.id], value: action.value}
            }
        }
    }


    const changeRangeValue = (action: ChangeValueActionType) => {
        return {
            ...state,
            currentValue: {
                ...state.currentValue,
                min: action.valueMin,
                max: action.valueMax ? action.valueMax : maxValueCurrent
            }
        }
    }

    const changeSettingStep = (action: SettingActionType, stateCopy: InitialStateType = state) => {
        return {
            ...stateCopy,
            settingsInput: {
                ...stateCopy.settingsInput,
                [stepValueSettingID]: {
                    ...stateCopy.settingsInput[stepValueSettingID],
                    value: Math.ceil(action.value / 2)
                }
            }
        }
    }

    switch (action.type) {
        case MIN_VALUE_SETTING: {
            if (maxValueSettings <= action.value || action.value < 0) return state
            if (action.value > minValueCurrent)
                return changeSettingsValue(action, changeRangeValue(changeValueInputAC(action.value)))
            return changeSettingsValue(action)
        }

        case MAX_VALUE_SETTING: {
            if (minValueSettings >= action.value) return state

            if (maxValueCurrent >= action.value) {
                const changedMaxValue = changeRangeValue(changeValueInputAC(minValueCurrent, action.value))
                if (action.value < minValueCurrent) {
                    const actions = changeSettingStep(action, changeRangeValue(changeValueInputAC(action.value, action.value)))
                    return changeSettingsValue(action, actions)
                }
                if ((action.value / 2) < stepValueSettings)
                    return changeSettingsValue(action, changeSettingStep(action, changedMaxValue))
                return changeSettingsValue(action, changedMaxValue)
            }
            if ((action.value / 2) < stepValueSettings)
                return changeSettingsValue(action, changeSettingStep(action))

            return changeSettingsValue(action)
        }
        case RANGE_VALUE_SETTING: {
            if (action.value <= 0 || action.value > (maxValueSettings / 2)) return state
            return changeSettingsValue(action)
        }
        case CHANGE_INPUT_VALUE: {
            if (minValueSettings > action.valueMin)
                return changeRangeValue({...action, valueMin: minValueSettings})

            if (action.valueMax) {
                if (maxValueSettings <= action.valueMax) {
                    const actions = {...action, valueMax: maxValueSettings}
                    changeRangeValue(actions)
                }
            }
            return changeRangeValue(action)
        }
        default:
            return state
    }
}