import React from 'react';
import './style.scss';

const RadioButton = ({id, activeRadioInput, onChange}) => {
    return (
        <label className="input-radio">
            <input
                type="radio"
                id={id}
                checked={activeRadioInput === id}
                onChange={(e) => onChange(e)}
            />
        </label>
    );
};

export default RadioButton;