import React from 'react';
import './style.scss'
import Wrapper from "../../components/wrapper";
import AuthorizationForm from "./authorization-form";
import AuthorizationLinkToRegister from "./authorization-register";

const Authorization = () => {

    return (
        <Wrapper>
            <div className="sign-in">
                <AuthorizationForm />
                <AuthorizationLinkToRegister />
            </div>
        </Wrapper>
    );
};

export default Authorization;