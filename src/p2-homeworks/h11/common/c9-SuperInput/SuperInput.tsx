import TextField from "@material-ui/core/TextField/TextField";
import React, {ChangeEvent} from "react"
import {SettingActionType} from "../../../h10/bll/settingsValueReducer";
import s from "./SuperInput.module.css"

type SuperInputType = {
    text: string
    onChange: (value: SettingActionType) => void
    id: string
    value: number
    action: (value: number, id: string) => SettingActionType
}

export const SuperInput: React.FC<SuperInputType> = React.memo(
    ({text, onChange, id, value, action}) => {

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