import React from 'react';
import {PaymentMethodsData} from "./constants";
import PaymentMethodCard from "./payment-method-card";

const DeliveryPayment = () => {
    return (
        <div className="delivery__payment">
            <div className="delivery__payment-title">
                Способы оплаты:
            </div>
            <div className="delivery__payment-methods">
                {PaymentMethodsData.map(i =>
                    <PaymentMethodCard
                        image={i.image}
                        title={i.title}
                        text={i.text}
                    />
                )}
            </div>
        </div>
    );
};

export default DeliveryPayment;