import React, {useCallback, useMemo} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {useDispatch, useSelector} from "react-redux";
import {SuperInput} from "./common/c9-SuperInput/SuperInput";
import {
    maxValueSettingID,
    minValueSettingID,
    stepValueSettingID,
    SettingsType,
    changeInputValueAC,
    changeSettingValueAC,
    settingsInputType,
    currentValueType,
    changeSettingValueACActionType, changeInputValueACActionType, CHANGE_VALUE_SETTING,
} from "../h10/bll/settingsValueReducer";
import s from "./HW11.module.css"
import {AppStoreType} from "../h10/bll/store";

type useSelectorOutputType = [
    settingsInputType,
    currentValueType
]

function HW11() {
    const dispatch = useDispatch()
    const [settings, currentValue] = useSelector<AppStoreType, useSelectorOutputType>(state => {
        return [state.rangeValue.settingsInput, state.rangeValue.currentValue]
    })

    const allSettings = [settings[minValueSettingID], settings[maxValueSettingID], settings[stepValueSettingID]];
    const [minValueSetting, maxValueSetting, stepValueSetting] = allSettings;
    const [minCurrentValue, maxCurrentValue] = [currentValue.min, currentValue.max];

    const onChange = useCallback((value: changeSettingValueACActionType | changeInputValueACActionType) => {
        if(value.type === CHANGE_VALUE_SETTING){
            if (value.id === minValueSettingID) {
                if (value.value > minCurrentValue) {
                    dispatch(changeInputValueAC(value.value))
                }
                if (maxValueSetting.value - value.value < stepValueSetting.value) {
                    dispatch(changeSettingValueAC((maxValueSetting.value - value.value), stepValueSettingID))
                }
                if (value.value >= maxValueSetting.value || value.value < 0) return
            }
            if (value.id === maxValueSettingID) {
                if (value.value < maxCurrentValue) {
                    dispatch(changeInputValueAC(minValueSetting.value, value.value))
                }
                if (value.value - minValueSetting.value < stepValueSetting.value) {
                    dispatch(changeSettingValueAC((value.value - minValueSetting.value), stepValueSettingID))
                }
                if (value.value <= minValueSetting.value) return
            }
            if (value.id === stepValueSettingID) {
                if (value.value > (maxValueSetting.value - minValueSetting.value) || value.value <= 0) return
            }
        }else{
            if (value.minValue > maxCurrentValue) return
        }
        dispatch(value)
    }, [dispatch, minCurrentValue, maxCurrentValue, minValueSetting.value, maxValueSetting.value, stepValueSetting.value])

    const inputs = useMemo(() => {
        return allSettings.map((v: SettingsType) =>
            <SuperInput key={v.id}
                        text={v.description}
                        id={v.id}
                        onChange={onChange}
                        value={v.value}/>)
    }, [ allSettings,onChange]);

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <div className={s.wrapperInputsElements}>
                    {inputs}
                </div>
                <div>
                    <span>{minCurrentValue}</span>
                    <SuperRange
                        value={minCurrentValue}
                        min={minValueSetting.value}
                        onChanges={onChange}
                        // сделать так чтоб currentMinValue изменялось
                    />
                </div>
            </div>


            <div className={s.container}>
                <span>{minCurrentValue}</span>
                <SuperDoubleRange
                    value={[minCurrentValue, maxCurrentValue]}
                    min={minValueSetting.value}
                    max={maxValueSetting.value}
                    step={stepValueSetting.value}
                    onChanges={onChange}
                    // сделать так чтоб currentMinValue и value2 изменялось
                />
                <span>{maxCurrentValue}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

// if (settings[minValue].value > value.min) {
//     dispatch(valueChangeInputAC(settings[minValue].value))
// }
// if(settings[maxValue].value < value.max){
//     dispatch(valueChangeInputAC(value.min,settings[maxValue].value))
// }
