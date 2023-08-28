import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import ContactsInfo from "./contacts-info";
import ContactsFeedback from "./contacts-feedback";
import Title from "../../components/title";

const Contacts = () => {
    return (
        <Wrapper>
            <div className="contacts">
                <div className="contacts__inner">
                    <MainNav/>
                    <div className="contacts__inner-content">
                        <Title
                            title={"Контакты"}
                            className={"page"}
                        />
                        <ContactsInfo />
                        <ContactsFeedback />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contacts;