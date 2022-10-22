import React from 'react';
import './style.scss';

const Wrapper = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
};

export default Wrapper;