import React, {useState} from 'react';
import './style.scss'
import {Operations} from "./constants";
import {ReactComponent as MinusIcon} from "../../images/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../../images/icons/plus.svg";

const Counter = () => {
    const [num, setNum] = useState(1)

    const handleSetNum = (operation) => {
        if (operation === Operations.minus){
            return num > 0 && setNum(num - 1)
        } else {
            return setNum(num + 1)
        }
    }

    return (
        <div className="counter">
            <div className="counter__inner">
                <div className="counter__inner-block minus" onClick={() => handleSetNum(Operations.minus)}>
                    <MinusIcon />
                </div>
                <div className="counter__inner-block number">{num}</div>
                <div className="counter__inner-block plus" onClick={() => handleSetNum(Operations.plus)}>
                    <PlusIcon />
                </div>
            </div>
        </div>
    );
};

export default Counter;