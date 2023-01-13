import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ContactsInfo from "./contacts-info";
import ContactsFeedback from "./contacts-feedback";

const Contacts = () => {
    return (
        <Wrapper>
            <div className="contacts">
                <div className="contacts__inner">
                    <MainNav/>
                    <div className="contacts__inner-content">
                        <div className="contacts__title">
                            Контакты
                        </div>
                        <ContactsInfo />
                        <ContactsFeedback />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contacts;