import React, {useEffect, useState} from 'react';
import '../src/styles/global.scss';
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "./Context";
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
            <AppRoutes/>
        </LoadingAnimationContext.Provider>
    );
}

export default App;
