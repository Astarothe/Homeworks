import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter("all")

    const setHigh = () => props.setFilter("high")

    const setMiddle = () => props.setFilter("middle")

    const setLow = () => props.setFilter("low")


    const allClassName = `${s.buttonItem} ${props.filter === "all" ? s.active : ""}`
    const highClassName = `${s.buttonItem} ${props.filter === "high" ? s.active : ""}`
    const middleClassName = `${s.buttonItem} ${props.filter === "middle" ? s.active : ""}`
    const lowClassName = `${s.buttonItem} ${props.filter === "low" ? s.active : ""}`

    return (
        <div>
            <div className={s.listAffairs}>
                {mappedAffairs}
            </div>
            <div className={s.buttonList}>
                <button className={allClassName} onClick={setAll} data-button={"All"}>All</button>
                <button className={highClassName} onClick={setHigh} data-button={"High"}>High</button>
                <button className={middleClassName} onClick={setMiddle} data-button={"Middle"}>Middle</button>
                <button className={lowClassName} onClick={setLow} data-button={"Low"}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
