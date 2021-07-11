import TextField from "@material-ui/core/TextField/TextField";
import React, {ChangeEvent} from "react"
import {ActionType} from "../../../h10/bll/settingsValueReducer";
import s from "./InputValue.module.css"

type InputValueType = {
    text: string
    onChange: (value: ActionType) => void
    id: string
    value: number
    action: any
}

export const InputValue: React.FC<InputValueType> = React.memo((
    {
        text, onChange, id, value, action
    }) => {
    console.log(value)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange(action(Number(e.currentTarget.value), id))
    }

    return (
        <div className={s.wrapperInput}>
            <TextField
                id={id}
                label={text}
                type="number"
                value={value}
                onChange={onChangeHandler}
                InputLabelProps={{
                    shrink: true,
                }}/>

        </div>
    )
})
//
//     <span className={s.spanText}>{text}</span>
// <input className={s.inputValue} type="number" min={0} value={value} onChange={onChangeHandler}/>