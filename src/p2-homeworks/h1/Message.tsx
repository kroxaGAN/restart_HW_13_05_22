import React from 'react'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = ({avatar, name, message, time}: PropsType) => {
    return (
        <div>
            <img src={avatar} alt={''}/>
            <div>
                {name}
                <div>
                    {message}
                    <div>{time}</div>
                </div>
            </div>
        </div>
    )
}

