import React from 'react';
import Header from "../../blocks/header";
import Footer from "../../blocks/footer";
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;