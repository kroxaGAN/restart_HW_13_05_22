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
            <div className={s.circle}>''</div>
            <div className={s.textMes}>
                {name}
                <div className={s.textTime}>
                    <div className={s.name}>
                        {message}
                    </div>
                    <div className={s.time}>{time}</div>
                </div>
            </div>
        </div>
    )
}

