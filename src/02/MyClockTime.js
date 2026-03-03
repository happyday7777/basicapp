import style from './MyClockTime.module.css';
import { useState, useEffect } from 'react';

function MyClockTime(){
    const [ctime, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const tm = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(tm);
    }, []);

    return(
        <div className={style.c3}>
            현재시각 : {ctime}
        </div>
 
    );

}

export default MyClockTime;