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
                {PaymentMethodsData.map(paymentMethod =>
                    <PaymentMethodCard
                        key={Math.floor(Math.random() * 100000)}
                        image={paymentMethod.image}
                        title={paymentMethod.title}
                        text={paymentMethod.text}
                    />
                )}
            </div>
        </div>
    );
};

export default DeliveryPayment;