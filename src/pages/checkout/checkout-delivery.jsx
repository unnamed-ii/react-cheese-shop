import React, {useState} from 'react';
import RadioButton from "../../components/radio-button";
import CheckBox from "../../components/checkbox";
import {russianRegions} from "./constants";

const CheckoutDelivery = ({setRegion, setDeliveryMethod, deliveryMethod, setField, userInfo}) => {

    return (
        <div className="checkout__info-delivery">
            <div className="checkout__info-delivery__title">
                Выберите способ доставки:
            </div>
            <div className="checkout__info-delivery__types">
                <form>
                    <div className="checkout__info-delivery__type free">
                        <RadioButton
                            id={"Бесплатная доставка\n"}
                            activeRadioInput={deliveryMethod}
                            onChange={setDeliveryMethod}
                        />
                        Бесплатная доставка <span>(0 руб.)</span>
                    </div>
                    <div className="checkout__info-delivery__type courier">
                        <RadioButton
                            id={"Курьер"}
                            activeRadioInput={deliveryMethod}
                            onChange={setDeliveryMethod}
                        />
                        Курьер <span>(350 руб.)</span>
                    </div>
                </form>
            </div>
            <div className="checkout__info-delivery__data">
                <div className="title">
                    Ваши данные для доставки:
                </div>
                <div className="inputs">
                    <div className="input">
                        <div className="text">Имя и фамилия</div>
                        <input
                            type="text"
                            placeholder="Иванов Андрей"
                            value={userInfo.fullName}
                            name={"fullName"}
                            onChange={(e) => setField(e)}
                        />
                    </div>
                    <div className="input">
                        <div className="text">Номер телефона</div>
                        <input
                            type="text"
                            placeholder="+7 000 000 00 00"
                            value={userInfo.phoneNumber}
                            name={"phoneNumber"}
                            onChange={(e) => setField(e)}
                        />
                    </div>
                </div>
                <div className="selects">
                    <div className="select">
                        <div className="text">Выберите страну</div>
                        <select>
                            <option value="">Российская Федерация</option>
                        </select>
                    </div>
                    <div className="select">
                        <div className="text">Выберите регион</div>
                        <select onChange={(e) => setRegion(e)}>
                            {russianRegions.map((region, idx) => (
                                <option value={region} key={idx}>
                                    {region}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <div className="text">Улица, дом и квартира</div>
                        <input
                            type="text"
                            placeholder="Ивановская 34, кв.12"
                            value={userInfo.address}
                            name={"address"}
                            onChange={(e) => setField(e)}
                        />
                    </div>
                    <div className="input">
                        <div className="text">Индекс</div>
                        <input
                            type="text"
                            placeholder="02100"
                            value={userInfo.index}
                            name={"index"}
                            onChange={(e) => setField(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="checkout__info-delivery__privacy">
                <CheckBox/>
                <div className="text">
                    Согласен на обработку персональных данных в соответствии с <a href="#">политикой
                    конфиденциальности</a>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDelivery;