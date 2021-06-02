import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: Array<{ _id: string, name: string }>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        let errorName = value.split("").filter(t => t === " ");

        if (value === " ") {
            setError('У тебя имя с пробела начинается, дружочек?')
            e.currentTarget.value = ""
        } else if (value.length < 2) {
            setName(value.toUpperCase())
        } else if (errorName.length > 0) {
            setError('Пробелы нельзя!')
        } else {
            setError("")
            setName(value)
        }
    }
    const addUser = () => {
        if (name.length < 3 || name === "") {
            setError('Ну, если у тебя рили меньше 3 букв имя, сочувствую');
        } else {
            alert(`Hello ${name}! `)
            addUserCallback(name)
            setName("")
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
