import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const priorityStyle = `${s.nameItem} ${s[props.affair.priority]}`

    return (
        <div className={s.affairsItem}>
            <span className={s.nameItem}>{props.affair.name}</span>
            <span className={priorityStyle}>{props.affair.priority}</span>
            <button className={s.buttonItem} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
