import React from 'react';
import './style.scss'
import {ReactComponent as CloseBtn} from "../../images/icons/close-btn.svg";

const ProductAddedAlert = ({productName, showAlert}) => {
    return (
        <div className={"product-added-alert " + (showAlert && "show")}>
            {productName}
            <button><CloseBtn /></button>
        </div>
    );
};

export default ProductAddedAlert;