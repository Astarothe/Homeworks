import React, {useCallback, useMemo} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {useDispatch, useSelector} from "react-redux";
import {SuperInput} from "./common/c9-SuperInput/SuperInput";
import {
    allAction,
    maxValueSettingID,
    minValueSettingID,
    stepValueSettingID,
    SettingsType,
} from "../h10/bll/settingsValueReducer";
import s from "./HW11.module.css"
import {AppStoreType} from "../h10/bll/store";

type SelectorAll = SettingsType[] & any

function HW11() {

    const dispatch = useDispatch()
    let [settings, value] = useSelector<AppStoreType, SelectorAll>(state => {
        return [state.rangeValue.settingsInput, state.rangeValue.currentValue]
    })

    const allSettings = [settings[minValueSettingID], settings[maxValueSettingID], settings[stepValueSettingID]];
    const [minValueSetting, maxValueSetting, stepValueSetting] = allSettings;
    const [minCurrentValue, maxCurrentValue] = [value.min, value.max];

    const onChange = useCallback((value: allAction) => {
            dispatch(value)
        }, []
    )
    const inputs = useMemo(() => {
        return allSettings.map((v: SettingsType) =>
            <SuperInput key={v.id} text={v.description}
                        id={v.id} onChange={onChange} value={v.value}
                        action={v.action}/>
        )
    }, [allSettings]);

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
                        max={maxValueSetting.value}
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
