import React, {ChangeEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: ChangeEventHandler<HTMLInputElement>
    addUser: () => void
    error: string
    totalUsers: number
    inputError: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, inputError}
) => {
    let inputClass = s.error

    let inputStyle = {
        border: inputError ? "5px solid darkseagreen" : "5px solid red"
    };
    const keyNumberHandler = (e: KeyboardEvent<HTMLInputElement>) => e.charCode === 13 ? addUser() : null

    return (
        <div className={s.wrapper}>
            <input onKeyPress={keyNumberHandler}
                   style={inputStyle}
                   value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.buttonAdd} onClick={addUser}>Add user</button>
            <span className={s.totalUsers}>All users - {totalUsers}</span>
            <div>
                <span className={s.errorText}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
