import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'


// types
export type UserType = {
    _id: string // need to fix any
    count: number
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), count: users.length + 1, name: name}]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <div>{users.map(el =>
                <div key={el._id}>
                    <span className={s.count}>{el.count}</span>
                    <span>{el.name}</span>
                </div>
            )}</div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
