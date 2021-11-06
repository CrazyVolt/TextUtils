import React, {useState} from 'react'
import TimeKeeper from 'react-timekeeper'

const TimePicker = () => {
    const [time, setTime] = useState('12:34 pm')
    return (
        <div>
            < TimeKeeper time={time} onChange={(newTime) => setTime(newTime.formatted12)} />
            <span> Time is {time} </span>
        </div>
    )
}

export default TimePicker
