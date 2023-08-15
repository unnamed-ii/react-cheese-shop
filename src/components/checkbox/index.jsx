import React, {useState} from 'react';
import './style.scss';

const CheckBox = ({checkedProp}) => {
    const [isChecked, setIsChecked] = useState(checkedProp || false);
    
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