import React, {Suspense, useEffect, useState} from 'react';
import '../src/styles/global.scss';
import {useLocation} from "react-router-dom";
import {LoadingAnimationContext} from "./Context";
import LoadingAnimation from "./components/loadingAnimation/loadingAnimation";
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
            <Suspense fallback={<LoadingAnimation isLoading={isLoading}/>}>
                <AppRoutes/>
            </Suspense>
        </LoadingAnimationContext.Provider>
    );
}

export default App;
