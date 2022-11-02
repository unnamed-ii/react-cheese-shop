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
        isActive: true
    },
    {
        title: 'Наборы',
        subtitle: 'Наборы для сыроделия',
        text: 'Все что вам нужно для приготовления сыра в домашних условиях',
        backgroundImage: recipesBg,
        isActive: false
    },
    {
        title: 'Наборы',
        subtitle: 'Наборы для сыроделия',
        text: 'Все что вам нужно для приготовления сыра в домашних условиях',
        backgroundImage: discountsBg,
        isActive: false
    }
]