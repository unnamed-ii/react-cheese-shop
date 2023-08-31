import React, {useState} from 'react';
import './style.scss';

const CheckBox = ({checkedProp = false}) => {
    const [isChecked, setIsChecked] = useState(checkedProp);
    
    return (
        <label className="form-control">
            <input
                type="checkbox"
                name="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
        </label>
    );
};

export default CheckBox;