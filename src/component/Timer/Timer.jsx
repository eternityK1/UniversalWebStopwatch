import React, {useState, useEffect} from 'react';
import {Button} from '@material-ui/core';
import cl from './Timer.module.css';
import WatchCounter from '../UI/WatchCounter/WatchCounter';

import {useSelector, useDispatch} from 'react-redux';
import {
    actionContinueTimer,
    actionPauseTimer,
    actionResetTimer, actionSetTimeNow,
    actionStartTimer
} from "../../store/actionsCreators/timerActionCreators";


const Timer = () => {
    const dispatch = useDispatch();

    const timeNow = useSelector(state => state.timer.timeNow);
    const timeStart = useSelector(state => state.timer.timeStart);
    const start = useSelector(state => state.timer.start);
    const overflow = useSelector(state => state.timer.overflow);

    const [msTime, setMsTime] = useState(0)
    const [secTime, setSecTime] = useState(0)
    const [minTime, setMinTime] = useState(0)


    useEffect(() => {
        let interval = null

        if (start) {
            interval = setInterval(() => {
                dispatch(actionSetTimeNow(Date.now() - timeStart))

            }, 20)
        }
        return () => clearInterval(interval)
    }, [timeNow, start])

    useEffect(() => {
        let time = 0;
        if (timeNow < 5999999) {
            time = timeNow
        } else {
            time = 5999999
            dispatch({type: "ACTION_OVERFLOW_TIMER"});
        }

        let ms10 = Math.trunc((time) / 1000)
        setSecTime(Math.trunc(ms10 % 60))
        setMsTime(Math.trunc((time) % 1000 / 10))
        setMinTime(Math.trunc(ms10 / 60))

    }, [timeNow])

    const startTimer = () => {
        dispatch(actionStartTimer(Date.now()));
    }

    const resetTimer = () => {
        dispatch(actionResetTimer())
    }

    const continueTimer = () => {
        dispatch(actionContinueTimer(Date.now() - timeNow))
    }

    const pauseTimer = () =>{
        dispatch(actionPauseTimer())
    }
    return (
        <div className={cl.main_cnt}>
            <WatchCounter ms={msTime} sec={secTime} min={minTime} delimiter={false}/>
            <div className={cl.root}>
                {start ?
                    <Button variant="contained" color="primary" onClick={() => pauseTimer()}>Стоп</Button>
                    :
                    timeNow ?
                        <Button disabled={overflow} variant="contained" color="primary"
                                onClick={() => continueTimer()}>Продолжить</Button>
                        :
                        <Button variant="contained" color="primary" onClick={() => startTimer()}>Старт</Button>
                }
                <Button variant="contained" color='secondary' onClick={() => resetTimer()}>Сброс</Button>
            </div>
        </div>
    )
}

export default Timer