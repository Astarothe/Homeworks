import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

export function Header() {

    return (
        <div className={s.wrapperList}>
            <ul className={s.listLevel}>
                <li className={s.listItem}><NavLink to={"./pre-junior"} activeClassName={s.active}>pre-junior </NavLink></li>
                <li className={s.listItem}><NavLink to={"./junior"} activeClassName={s.active}>junior </NavLink></li>
                <li className={s.listItem}><NavLink to={"./junior-plus"} activeClassName={s.active}>junior+ </NavLink></li>
                <li className={s.listItem}><span className={s.menu}>Level Task</span></li>
            </ul>
        </div>
    )
}
