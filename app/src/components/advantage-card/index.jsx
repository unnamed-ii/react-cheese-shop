import React from 'react';
import './style.scss'

const Advantage = ({icon, text}) => {
    return (
        <div className="advantage">
            {icon}
            <div className="advantage__text">
                {text}
            </div>
        </div>
    );
};

export default Advantage;