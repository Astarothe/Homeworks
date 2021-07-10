import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {useDispatch, useSelector} from "react-redux";
import {InputValue} from "./common/c9-InputValue/InputValue";
import {ActionType, maxValue, minValue, rangeValue} from "../h10/bll/settingsValueReducer";

function HW11() {
    let stateInputs: any;

    const dispatch = useDispatch()
    const [min, max, range] = useSelector<any, any>(state => {
        stateInputs = [state.rangeValue[minValue], state.rangeValue[maxValue], state.rangeValue[rangeValue]];
        return [...stateInputs]
    })
    const [value1, setValue1] = useState(min.value)
    const [value2, setValue2] = useState(max.value)

    function onChange(value: ActionType) {
        dispatch(value)
    }

    useEffect(() => {
        if(value1 <= min.value) {
            setValue1(min.value)
        }
        if(value2 >= max.value){
            setValue2(max.value)
        }
        if(value1 >= value2){
            setValue1(value2)
        }
        console.log(value1, min.value, value2,max.value)
    }, [min.value, max.value, value1, value2])


    console.log(min.value)

    return (
        <div style={{marginLeft: "50px"}}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div style={{display: "flex"}}>
                    {stateInputs.map((v: any) =>
                        <InputValue key={v.id} text={v.text}
                                    id={v.id} onChange={onChange} value={v.value}
                                    action={v.action}
                        />)}
                </div>

                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    setValue={setValue1}
                    max={max.value}
                    min={min.value}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    setValueMin={setValue1}
                    setValueMax={setValue2}
                    min={min.value}
                    max={max.value}
                    step={range.value}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
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