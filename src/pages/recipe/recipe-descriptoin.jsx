import React from 'react';
import {RecipeData} from "./constants";
import {ReactComponent as BasketIcon} from "../../images/icons/recipe-page-basket.svg";
import recipeDescription from "../../images/recipe-page-description.png";

const RecipeDescription = () => {
    return (
        <div className="description">
            <div className="description__title">
                Описание сыра
            </div>
            <div className="description__text">
                Это мягкий вид сыра, который получают из коровьего молока. Считается одним из самых
                вкусных французских лакомств. Его изготавливают во многих странах Европы и в разных
                вариациях – де Мелен, де Мо, де Куломье.
                Для сыра характерен бледный оттенок. Имеет «благоприятную» плесень. Отличается наличием
                не сильного запаха нашатыря. Его приятный вкус буквально очаровывает (чем-то напоминает
                камамбер). При добавлении специальных ферментов может образовываться корочка.
            </div>
            <div className="description__images">
                <img src={recipeDescription} alt=""/>
                <img src={recipeDescription} alt=""/>
                <img src={recipeDescription} alt=""/>
                <img src={recipeDescription} alt=""/>
            </div>
            <div className="description__text">
                Хорошо подходит к праздничному застолью. Сочетается с закусками, бутербродами, супами и
                салатами. Также этот молочный продукт часто применяют для приготовления пикантных
                заправок и соусов. Некоторые сочетают Бри с мясом, овощами и фруктами. Поэтому можно
                считать этот сыр универсальным лакомством
                В его химическом составе содержится витамин А. Он помогает вырабатывать коллаген,
                который улучшает цвет кожи. Витамин В благоприятно влияет на нервную систему человека.
                Это очень сильно помогает при усталости и бессоннице.
            </div>
            <div className="description__ingredients">
                <div className="description__ingredients-title">
                    Ингредиенты
                </div>
                <div className="description__ingredients-list">
                    {RecipeData.ingredients.map(ingredient =>
                        <div className="description__ingredients-list__item">
                            <div className="text">
                                {ingredient.text}
                            </div>
                            {ingredient.isAvailableToBuy &&
                            <button>
                                <BasketIcon/>
                                В корзину
                            </button>
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className="description__equipments">
                <div className="description__equipments-title">
                    Оборудование
                </div>
                <div className="description__equipments-list">
                    {RecipeData.equipment.map(equipment =>
                        <div className="description__ingredients-list__item">
                            <div className="text">
                                {equipment.text}
                            </div>
                            {equipment.isAvailableToBuy &&
                            <button>
                                <BasketIcon/>
                                В корзину
                            </button>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeDescription;