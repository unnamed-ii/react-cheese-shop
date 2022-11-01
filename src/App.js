import React from 'react';
import '../src/styles/global.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./blocks/header";
import Footer from "./blocks/footer";
import Home from "./pages/home";
import Delivery from "./blocks/delivery";
import Reviews from "./pages/reviews";
import Contacts from "./blocks/contacts";
import Checkout from "./pages/checkout";
import QA from "./pages/qa";
import Calculator from "./blocks/calculator";
import Collections from "./pages/collections";
import Profile from "./blocks/profile";
import About from "./pages/ about";
import Registration from "./pages/registration";
import Authorization from "./pages/authorization";
import Recovery from "./pages/recovery";
import Recipes from "./pages/recipes";
import Article from "./pages/article";
import Recipe from "./pages/recipe";
import ProductCard from "./pages/product-card";
import Category from "./pages/category";
import RegistrationModal from "./components/modals/registration";

function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="product-card" element={<ProductCard/>}/>
                <Route path="category" element={<Category/>}/>
                <Route path="recipes" element={<Recipes/>}/>
                <Route path="recipe" element={<Recipe/>}/>
                <Route path="article" element={<Article/>}/>
                <Route path="delivery" element={<Delivery/>}/>
                <Route path="reviews" element={<Reviews/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="checkout" element={<Checkout/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="questions-and-answers" element={<QA/>}/>
                <Route path="calculator" element={<Calculator/>}/>
                <Route path="collections" element={<Collections/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="authorization" element={<Authorization/>}/>
                <Route path="recovery" element={<Recovery/>}/>
                <Route path="registration-modal" element={<RegistrationModal show/>}/>
            </Routes>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
