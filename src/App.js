import React, {useEffect, useState} from 'react';
import '../src/styles/global.scss';
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./blocks/header";
import Footer from "./blocks/footer";
import Home from "./pages/home";
import Delivery from "./pages/delivery";
import Reviews from "./pages/reviews";
import Contacts from "./pages/contacts";
import Checkout from "./pages/checkout";
import QA from "./pages/qa";
import Calculator from "./pages/calculator";
import Collections from "./pages/collections";
import Profile from "./pages/profile";
import About from "./pages/ about";
import Registration from "./pages/registration";
import Authorization from "./pages/authorization";
import Recovery from "./pages/recovery";
import Recipes from "./pages/recipes";
import Article from "./pages/article";
import Recipe from "./pages/recipe";
import ProductCard from "./pages/product-card";
import Category from "./pages/category";
import Collection from "./pages/collection";
import {LoadingAnimationContext} from "./Context";

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
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="product-card/:id" element={<ProductCard/>}/>
                    <Route path="category" element={<Category/>}/>
                    <Route path="recipes" element={<Recipes/>}/>
                    <Route path="recipes/:id" element={<Recipe/>}/>
                    <Route path="articles/:id" element={<Article/>}/>
                    <Route path="delivery" element={<Delivery/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="questions-and-answers" element={<QA/>}/>
                    <Route path="calculator" element={<Calculator/>}/>
                    <Route path="collections" element={<Collections/>}/>
                    <Route path="collections/:id" element={<Collection/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="authorization" element={<Authorization/>}/>
                    <Route path="recovery" element={<Recovery/>}/>
                </Routes>
                <Footer/>
            </div>
        </LoadingAnimationContext.Provider>
    );
}

export default App;
