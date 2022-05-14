import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = ({avatar, name, message, time}: PropsType) => {
    return (
        <div className={s.message}>
            <img src={avatar} alt={''} className={s.img}/>
            <div className={s.circle}/>
            <div className={s.textMes}>
                <h3>{name}</h3>
                <div className={s.textTime}>
                    <div className={s.text}>{message}</div>
                    <div className={s.time}>{time}</div>
                </div>
            </div>
        </div>
    )
}

