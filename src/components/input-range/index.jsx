import React, {useState} from 'react';

const CustomInputRange = () => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10000)

    const handleChangeMin = (e) => {
        setMin(e.target.value)
    }

    const handleChangeMax = (e) => {
        setMax(e.target.value)
    }

    return (
        <label>
            {min}_{max}
            <input type="range" min={0} max={max} onChange={handleChangeMin} value={min} step={1}/>
            <input type="range" min={min} max={10000} onChange={handleChangeMax} value={max} step={1}/>
        </label>
    );
};

export default CustomInputRange;