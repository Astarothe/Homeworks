import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options
        ? options.map((o,i) =>
            (<option key={o + "-" + i} value={o}>{o}</option>))
        : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if(onChangeOption){
            onChangeOption(e.currentTarget.value)
        }
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} className={s.superInput} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
