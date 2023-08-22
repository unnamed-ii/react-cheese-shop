import React, {Suspense, useEffect, useState} from 'react';
import '../src/styles/global.scss';
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "./Context";
import LoadingAnimation from "./components/loadingAnimation/loadingAnimation";
import Header from "./blocks/header";
import Footer from "./blocks/footer";
import AppRoutes from "./AppRoutes";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    return (
        <LoadingAnimationContext.Provider value={{isLoading, setIsLoading}}>
            <div className="app">
                <Header/>
                <Suspense fallback={<LoadingAnimation isLoading={isLoading}/>}>
                    <AppRoutes/>
                </Suspense>
                <Footer/>
            </div>
        </LoadingAnimationContext.Provider>
    );
}

export default App;
