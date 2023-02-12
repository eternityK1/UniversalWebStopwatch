import './App.css';
import Timer from './component/Timer/Timer';
import {BrowserRouter, Route, Link, Routes, NavLink} from "react-router-dom";
import {} from "react-router-dom";
import {ReactSVG} from 'react-svg'
import SvgMemuIconClock from "./uploads/img/icon_menu/clock.svg"
import SvgMemuIconSec from "./uploads/img/icon_menu/history.svg"
import SvgFullScreenIcon from "./uploads/img/icon_menu/fullscreen.svg"
import SvgMenuCube from "./uploads/img/icon_menu/menu__cube.svg"
import Clock from './component/Clock/Clock';
import Random from "./component/Random/Random";
import {useState} from "react";
import {FullScreen, useFullScreenHandle} from "react-full-screen";


function App() {

    const [fullScreenMode, setFullScreenMode] = useState(false);
    const handleFullScreen = useFullScreenHandle();

    const styleFullScreen = (state) => {
        if(state){
            setTimeout(() => {
                setFullScreenMode(true)
            }, 1500)
        }
        else{
            setTimeout(() => {
                setFullScreenMode(false)
            }, 1500)
        }

    }

    return (
        <BrowserRouter>
            <FullScreen handle={handleFullScreen} onChange={styleFullScreen}>
                <button className='fullScreen' onClick={() => {
                    handleFullScreen.active ? handleFullScreen.exit() : handleFullScreen.enter();
                }}>
                    <ReactSVG className="fullScreen__icon" src={SvgFullScreenIcon}/>
                </button>

                <nav className={'menu' + (fullScreenMode ? ' fullmode' : '')}>
                    <div className='cnt_menu'>
                        <NavLink className={"menu_item"} to="/">
                            <div className='link-item-menu'>
                                <ReactSVG className="img-item-menu" src={SvgMemuIconClock}/>
                                <div className='text-item-menu'>
                                    Часы
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className={"menu_item"} to="/stopwatch">
                            <div className='link-item-menu'>
                                <ReactSVG className="img-item-menu" src={SvgMemuIconSec}/>
                                <div className='text-item-menu'>
                                    Секундомер
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className={"menu_item"} to="/random">
                            <div className='link-item-menu'>
                                <ReactSVG className="img-item-menu" src={SvgMenuCube}/>
                                <div className='text-item-menu'>
                                    Рандомайзер
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </nav>

                <div className='content'>
                    <Routes>
                        <Route path="/" element=
                            {<div className='cnt-stopwatch'>
                                <div className={'text-timer' + (fullScreenMode ? ' fullmode' : '')}>
                                    Часы
                                </div>
                                <div className='timer'>
                                    <Clock key={1}/>
                                </div>
                            </div>}
                        />
                        <Route path="/stopwatch" element=
                            {<div className='cnt-stopwatch'>
                                <div className={'text-timer' + (fullScreenMode ? ' fullmode' : '')}>
                                    Секундомер
                                </div>
                                <div className='timer'>
                                    <Timer key={2}/>
                                </div>
                            </div>}
                        />
                        <Route path="/random" element=
                            {<div className='cnt-stopwatch'>
                                <div className={'text-timer' + (fullScreenMode ? ' fullmode' : '')}>
                                    Рандомайзер
                                </div>
                                <div className='timer'>
                                    <Random key={3}/>
                                </div>
                            </div>}
                        />
                    </Routes>
                </div>
            </FullScreen>
        </BrowserRouter>
    );
}

export default App;