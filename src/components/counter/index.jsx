import React from 'react';
import './style.scss'
import {ReactComponent as MinusIcon} from "../../images/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../../images/icons/plus.svg";

const Counter = ({productsNumber, setProductsNumber}) => {
    const increment = () => {
        setProductsNumber(productsNumber + 1);
    }

    const decrement = () => {
        if (productsNumber > 1){
            setProductsNumber(productsNumber - 1);
        }
    }

    return (
        <div className="counter">
            <div className="counter__inner">
                <MinusIcon
                    className="counter__inner-block minus"
                    onClick={decrement}
                />
                <div className="counter__inner-block number">
                    {productsNumber}
                </div>
                <PlusIcon
                    className="counter__inner-block plus"
                    onClick={increment}
                />
            </div>
        </div>
    );
};

export default Counter;