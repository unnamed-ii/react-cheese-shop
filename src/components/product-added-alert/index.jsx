import React from 'react';
import './style.scss'
import {ReactComponent as CloseBtn} from "../../images/icons/close-btn.svg";

const ProductAddedAlert = ({productName, showAlert, setShowAlert}) => {
    const closeAlert = () => setShowAlert(false);
    return (
        <div className={"product-added-alert " + (showAlert && "show")}>
            {productName} был добавлен в еорзину
            <button onClick={closeAlert}>
                <CloseBtn />
            </button>
        </div>
    );
};

export default ProductAddedAlert;