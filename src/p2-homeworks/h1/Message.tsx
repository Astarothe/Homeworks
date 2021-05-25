import React from 'react'
import s from "./Message.module.css"

type HW1PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: HW1PropsType) {
    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.message}>
                <p className={s.userName}>{props.name}</p>
                <p className={s.userMessage}>{props.message} <span className={s.userMessageTime}>{props.time}</span></p>
            </div>
        </div>
    )
}

export default Message
