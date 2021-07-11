import React, {useCallback, useEffect, useMemo, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {useDispatch, useSelector} from "react-redux";
import {InputValue} from "./common/c9-InputValue/InputValue";
import {ActionType, maxValue, minValue, rangeValue} from "../h10/bll/settingsValueReducer";
import s from "./HW11.module.css"

function HW11() {
    const dispatch = useDispatch()


    const [min, max, range, allInput] = useSelector<any, any>(state => {
        let stateInput = [state.rangeValue[minValue], state.rangeValue[maxValue], state.rangeValue[rangeValue]];

        return [...stateInput, stateInput]
    })
    const [currentMinValue, setCurrentMinValue] = useState(0)
    const [currentMaxValue, setCurrentMaxValue] = useState(100)
    console.log(currentMinValue)
    const onChange = useCallback((value: ActionType) => {
            dispatch(value)
        }, []
    )


    useEffect(() => {
        currentMinValue <= min.value
        && setCurrentMinValue(min.value)

        currentMaxValue >= max.value
        && setCurrentMaxValue(max.value)

        currentMinValue >= currentMaxValue
        && setCurrentMinValue(currentMaxValue)

    }, [min.value, max.value])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <div className={s.wrapperInputsElements}>
                    {allInput.map((v: any) =>

                        <InputValue key={v.id} text={v.text}
                                    id={v.id} onChange={onChange} value={v.value}
                                    action={v.action}
                        />)}
                </div>
                <div>
                    <span>{currentMinValue}</span>
                    <SuperRange
                        value={currentMinValue}
                        setValue={setCurrentMinValue}
                        max={max.value}
                        min={min.value}
                        // сделать так чтоб currentMinValue изменялось
                    />
                </div>
            </div>

            <div className={s.container}>
                <span>{currentMinValue}</span>
                <SuperDoubleRange
                    value={[currentMinValue, currentMaxValue]}
                    setValueMin={setCurrentMinValue}
                    setValueMax={setCurrentMaxValue}
                    min={min.value}
                    max={max.value}
                    step={range.value}
                    // сделать так чтоб currentMinValue и value2 изменялось
                />
                <span>{currentMaxValue}</span>
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

// const [inputValue, setInputValue] = useState<{ [key: string]: number }>({
//     [min.id]: min.value,
//     [max.id]: max.value,
//     [range.id]: range.value,
// })
// useEffect(()=> {
//     if(inputValue[min.id] >= inputValue[max.id]){
//
//     }
// },[inputValue[min.id], inputValue[max.id]])