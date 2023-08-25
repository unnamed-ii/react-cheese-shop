import React from 'react';
import './style.scss'
import {ReactComponent as MinusIcon} from "../../images/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../../images/icons/plus.svg";

const Counter = ({productsNumber = 1, setProductsNumber}) => {
    const handleSetNum = (operation) => {
        if (operation === "minus"){
            if (productsNumber > 0){
                setProductsNumber(productsNumber - 1);
            }
        } else {
            setProductsNumber(productsNumber + 1);
        }
    }

    return (
        <div className="counter">
            <div className="counter__inner">
                <div className="counter__inner-block minus" onClick={() => handleSetNum("minus")}>
                    <MinusIcon />
                </div>
                <div className="counter__inner-block number">{productsNumber}</div>
                <div className="counter__inner-block plus" onClick={() => handleSetNum("plus")}>
                    <PlusIcon />
                </div>
            </div>
        </div>
    );
};

export default Counter;