import React from 'react'
import cl from './IconTime.module.css'
const IconTime = (props) => {
    return (
        <div className={cl.cnt_time}>
            {props.children}
        </div>
    )
}

export default IconTime
