import React, {lazy, Suspense} from "react";
import {useRoutes} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/not-found";
import LoadingAnimation from "./components/loadingAnimation/loadingAnimation";

const Home = lazy(() => import("./pages/home"));
const Delivery = lazy(() => import("./pages/delivery"));
const Reviews = lazy(() => import("./pages/reviews"));
const Checkout = lazy(() => import("./pages/checkout"));
const QA = lazy(() => import("./pages/qa"))
const Calculator = lazy(() => import("./pages/calculator"));
const Collections = lazy(() => import("./pages/collections"));
const Profile = lazy(() => import("./pages/profile"));
const About = lazy(() => import("./pages/ about"));
const Registration = lazy(() => import("./pages/registration"));
const Authorization = lazy(() => import("./pages/authorization"));
const Recovery = lazy(() => import("./pages/recovery"));
const Recipes = lazy(() => import("./pages/recipes"));
const Article = lazy(() => import("./pages/article"));
const Recipe = lazy(() => import("./pages/recipe"));
const ProductCard = lazy(() => import("./pages/product-card"));
const Category = lazy(() => import("./pages/category"));
const Collection = lazy(() => import("./pages/collection"));
const Contacts = lazy(() => import('./pages/contacts'));

function AppRoutes() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: "product-card/:id", element: <ProductCard/>},
                {path: "category", element: <Category/>},
                {path: "recipes", element: <Recipes/>,},
                {path: "recipes/:id", element: <Recipe/>},
                {path: "articles/:id", element: <Article/>},
                {path: "delivery", element: <Delivery/>},
                {path: "reviews", element: <Reviews/>},
                {path: "about", element: <About/>},
                {path: "contacts", element: <Contacts/>},
                {path: "checkout", element: <Checkout/>},
                {path: "profile", element: <Profile/>},
                {path: "questions-and-answers", element: <QA/>},
                {path: "calculator", element: <Calculator/>},
                {path: "collections", element: <Collections/>},
                {path: "collections/:id", element: <Collection/>},
                {path: "registration", element: <Registration/>},
                {path: "authorization", element: <Authorization/>},
                {path: "recovery", element: <Recovery/>},
            ]
        },
        {path: "*", element: <NotFound/>},
    ]);

    return (
        <Suspense fallback={<LoadingAnimation isLoading={true}/>}>
            {routes}
        </Suspense>
    );
}

export default AppRoutes;
