import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value.trim();

        if (value) {
            setName(value)
            setError("")
        } else {
            setError('Введите имя!')
            setName("");
        }
    }
    const addUser = () => {
        if (name.length < 3) setError('Имя не может быть меньше 3 букв')
        else {
            alert(`Hello ${name}! `)
            addUserCallback(name)
            setName("")
        }

    }
    const onKeyBoardCallback = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" ? addUser() : null

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyBoardCallback={onKeyBoardCallback}
        />
    )
}

export default GreetingContainer
