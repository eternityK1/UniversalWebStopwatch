import React from 'react'
import cl from './WatchCounter.module.css'
import IconTime from '../IconTime/IconTime';

const WatchCounter = ({ sec, min, ms, delimiter = ''}) => {

    return (
        <div className={cl.main_cnt_watch} >
            <IconTime>{min.toString().padStart(2, '0')}</IconTime>
            {delimiter ?
                <div className={cl.delimiter}>{':'}</div>
                :
                ''
            }
            <IconTime>{sec.toString().padStart(2, '0')}</IconTime>
            {delimiter ?
                <div className={cl.delimiter}>{':'}</div>
                :
                ''
            }
            <IconTime>{ms.toString().padStart(2, '0')}</IconTime>
        </div>
    )
}

export default WatchCounter