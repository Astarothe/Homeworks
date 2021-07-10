import React, {ChangeEvent} from "react"
import {ActionType} from "../../../h10/bll/settingsValueReducer";

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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(action(Number(e.currentTarget.value), id))
    }

    return (
        <div>
            <span>{text}</span>
            <input type="number" min={0} value={value} onChange={onChangeHandler}/>
        </div>
    )
})