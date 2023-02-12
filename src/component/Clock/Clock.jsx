import React, { useState, useEffect } from 'react'
import WatchCounter from '../UI/WatchCounter/WatchCounter';
import cl from './Clock.module.css'

const Clock = () => {

    const [secTime, setSecTime] = useState(0)
    const [minTime, setMinTime] = useState(0)
    const [hoursTime, setHoursTime] = useState(0)
    const [dateNow, setDateNow] = useState(0)

    useEffect(() => {
        let Data = new Date();
        setSecTime(Data.getSeconds());
        setMinTime(Data.getMinutes());
        setHoursTime(Data.getHours());
        setDateNow(
            (Data.getDate().toString().length < 2 ? "0"+Data.getDate() : Data.getDate()) +
                ' . ' +
                (Data.getMonth().toString().length < 2 ? "0"+Data.getMonth() : Data.getMonth()) +
                ' . ' +
                Data.getFullYear()
        );
    }, [])

    useEffect(() => {

        let interval = setInterval(() => {
            let Data = new Date();
            setSecTime(Data.getSeconds());
            setMinTime(Data.getMinutes());
            setHoursTime(Data.getHours());
        }, 500)
        return () => {
            clearInterval(interval)
        }
    }, [])





    return (

        <div>

            <WatchCounter ms={secTime} sec={minTime} min={hoursTime} />
            <div className={cl.date}>{dateNow}</div>
        </div>
    )
}

export default Clock
