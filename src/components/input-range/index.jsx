import React, {useState} from 'react';
import './style.scss'

const CustomInputRange = () => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10000)
    const handleChangeMin = e => setMin(e.target.value)
    const handleChangeMax = e => setMax(e.target.value)

    return (
        <div className="custom-range">
            <div className="custom-range__handle-inputs">
                <input type="number" className="min" value={min} onChange={handleChangeMin}/>
                <input type="number" className="max" value={max} onChange={handleChangeMax}/>
            </div>
            <label>
                <input type="range" min={0} max={max} onChange={handleChangeMin} value={min} step={1}
                       className="range-min"/>
                <input type="range" min={min} max={10000} onChange={handleChangeMax} value={max} step={1}
                       className="range-max"/>
            </label>
        </div>
    );
};

export default CustomInputRange;