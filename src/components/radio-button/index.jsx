import React from 'react';
import './style.scss';

const RadioButton = ({id, activeRadioInput, setActiveRadioInput}) => {
    return (
        <label className="input-radio">
            <input
                type="radio"
                id={id}
                checked={activeRadioInput === id}
                onChange={(e) => setActiveRadioInput(e.target.id)}
            />
        </label>
    );
};

export default RadioButton;