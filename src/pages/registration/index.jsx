import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import RegistrationForm from "./registration-form";
import RegistrationInfo from "./registration-info";

const Registration = () => {
    return (
        <Wrapper>
            <div className="sign-up">
                <RegistrationInfo />
                <RegistrationForm />
            </div>
        </Wrapper>
    );
};

export default Registration;