import React, {ChangeEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: ChangeEventHandler<HTMLInputElement>
    addUser: () => void
    error: string
    totalUsers: number
    onKeyBoardCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyBoardCallback}
) => {

    const inputStyle = `${s.input} ${error ? s.errorInput : ""}`


    return (
        <div className={s.wrapper}>
            <input onKeyPress={onKeyBoardCallback}
                   value={name}
                   onChange={setNameCallback}
                   className={inputStyle}
            onBlur={setNameCallback}/>
            <button className={s.buttonAdd} onClick={addUser } disabled={!!error}>Add</button>
            <span className={s.totalUsers}>All users - {totalUsers}</span>
            <div>
                <span className={s.errorText}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
