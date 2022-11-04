import React, {useState} from 'react';
import './style.scss';
import Wrapper from "../../components/wrapper";
import MainNav from "../../components/main-nav";
import InstructionStep from "../../components/instruction-step";
import PopularRecipes from "../../blocks/popular-recipes";
import recipeDescription from '../../images/recipe-page-description.png';
import recipeBenefit from '../../images/recipe-page-benefit.png';
import {ReactComponent as BasketIcon} from '../../images/icons/recipe-page-basket.svg';
import {ReactComponent as ArrowDownIcon} from '../../images/icons/recipe-page-arrow-down.svg';
import {RecipeData} from "./constants";


const Recipe = () => {
    const [isDropDown, setIsDropDown] = useState(true);

    function showIsDroppedDown() {
        setIsDropDown(!isDropDown);
        console.log(isDropDown);
    }

    return (
        <Wrapper>
            <div className="recipe-page">
                <div className="recipe-page__inner">
                    <MainNav/>
                    <div className="recipe-page__inner-content">
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
                                    {RecipeData.ingredients.map((i, idx) =>
                                        <div className="description__ingredients-list__item">
                                            <div className="text">
                                                {i.text}
                                            </div>
                                            {i.isAvailableToBuy &&
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
                                    {RecipeData.equipment.map((i, idx) =>
                                        <div className="description__ingredients-list__item">
                                            <div className="text">
                                                {i.text}
                                            </div>
                                            {i.isAvailableToBuy &&
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
                        <div className="benefit">
                            <div className="benefit__title">
                                польза сыра
                            </div>
                            <div className="benefit__text">
                                Который значительно укрепляет костную ткань. В сыре содержится много других минералов –
                                магний, фосфор кадий, натрий, сера, хлор и др. Но при этом практически отсутствует
                                лактоза. Поэтому Бри могут легко употреблять в пищу люди с аллергией на лактозу.
                                Пищевая ценность сыра: в 100 граммах содержится 334 калория. Жиры – 28 грамм, холестерин
                                – 100 мг, натрий – 629 мг, калий – 152 мг, углеводы – 0,5 грамм, белки – 21 грамм.
                                Рецепт сыра Бри достаточно простой. Вам нужно подготовить все необходимые ингредиенты и
                                оборудование. Следуйте рекомендованному процессу приготовления и не нарушайте дозировку.
                                В таком случае у вас обязательно получится настоящий французский сыр.
                            </div>
                            <img src={recipeBenefit} alt=""/>
                            <div className="benefit__instruction">
                                <div className="benefit__instruction-title">
                                    как приготовить в домашних условиях
                                </div>
                                <div className="benefit__instruction-steps">
                                    {RecipeData.instruction.map((i, idx) =>
                                        <InstructionStep
                                            number={'0' + (idx + 1)}
                                            text={i.text}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="recommendation">
                            <div className="recommendation__title" onClick={showIsDroppedDown}>
                                Рекомендации по рецептам:
                                <ArrowDownIcon/>
                            </div>
                            <div className={"recommendation__info " + (isDropDown && "dropped")}>
                                <ul className="recommendation__list">
                                    <li>
                                        Пастеризация молока при +68 °C в течение 10 мин дает возможность достичь нужной нам
                                        цели без риска перегрева молока.
                                    </li>
                                    <li>
                                        Чтобы определить «точку флокуляции» - время, за которое происходит превращения
                                        молочной жидкости в сырный сгусток, нужно развести фермент в небольшом количестве
                                        воды и ввести в молоко, размешивая в течении 40 секунд.
                                    </li>
                                    <li>
                                        После берем крышечку и кладем на поверхность молока, ждем пока она не престанет
                                        вращаться, изредка подталкивая крышечку пальцем - проверяем .
                                    </li>
                                </ul>
                                <div className="recommendation__text">
                                    Как только крышечка застыла – мы достигли точки флокуляции.
                                    Время от момента внесения фермента и до образования сгустка засекаем – это и будет искомый
                                    показатель, который умножаем на 3. Так мы получаем время, которое выдерживаем с момента
                                    засыпки порошка до нарезки сгустка. Например, если мы внести фермент в 12.10, крышечка
                                    перестала двигаться через 10 минут, сгусток можно нарезать в 12.40.
                                </div>
                                <ul className="recommendation__list">
                                    <li>
                                        Деление зерна следует начинать с нарезки вертикальных полос. После 5 минут ожидания, режутся
                                        горизонтальные полосы и ждем еще 5 минут. Такой подход позволит сохранить целостность зерна
                                        и достичь оптимального (не очень быстрого) отхождения сыворотки.
                                    </li>
                                    <li>
                                        Оптимальная температура кипятка при вытягивании сыра Моцарелла +70 °C.
                                    </li>
                                    <li>
                                        Изучение рецептур по обучающим роликам – хороший способ изучить технологию и составить
                                        список необходимых для приготовления сыра товаров.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <PopularRecipes />
            </div>
        </Wrapper>
    );
};

export default Recipe;