import React from 'react';
import Header from "../../blocks/header";
import Footer from "../../blocks/footer";
import {Outlet} from 'react-router-dom';
import Breadcrumbs from "../breadcrumbs";
import {LoadingAnimationContext} from "../../Context";

const Layout = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;