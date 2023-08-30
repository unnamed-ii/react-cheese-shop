import React from "react";
import setsBg from "../../images/recommendations/sets-bg.png";
import recipesBg from "../../images/recommendations/recipes-bg.png";
import discountsBg from "../../images/recommendations/discounts-bg.png";

export const RecommendationItemsData = [
    {
        title: 'Наборы',
        subtitle: 'Наборы для сыроделия',
        text: 'Все что вам нужно для приготовления сыра в домашних условиях',
        backgroundImage: setsBg,
        linkTo: "collections",
        id: 1
    },
    {
        title: 'Сыры с плесенью',
        subtitle: 'Рецепты',
        text: 'Рецепты для множества различных видов сыров',
        backgroundImage: recipesBg,
        linkTo: "recipes",
        id: 2
    },
    {
        title: 'Закваски для сыра',
        subtitle: 'Акции',
        text: 'Отличные закваски для сыра в нашей сегодняшней акции',
        backgroundImage: discountsBg,
        linkTo: "category",
        id: 3
    }
]