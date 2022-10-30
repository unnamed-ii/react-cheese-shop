import React from 'react';
import './style.scss';
import {DropDownLinks} from "./drop-down-links";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right-grey.svg";
import {ReactComponent as IngredientsIcon} from "../../images/icons/main-nav/ingredients.svg";
import {ReactComponent as EquipmentIcon} from "../../images/icons/main-nav/equipment.svg";

const MainNav = () => {
    return (
        <div className="wrapper-nav">
            <div className="nav">
                <div className="nav__ingredients">
                    <div className="nav__ingredients-title">
                        <IngredientsIcon class="title-icon" /> Ингредиенты
                    </div>
                    <div className="nav__ingredients-links">
                        <div className="nav__ingredients-link">
                            Закваски для сыра
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                        <div className="nav__ingredients-link">
                            Ферменты для сыра
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                        <div className="nav__ingredients-link">
                            Хлористый кальций
                        </div>
                        <div className="nav__ingredients-link">
                            Плесень для сыра
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                        <div className="nav__ingredients-link">
                            Кисломолочные закваски
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                        <div className="nav__ingredients-link">
                            Красители для сыра
                        </div>
                        <div className="nav__ingredients-link">
                            Специи для сыра
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                    </div>
                </div>
                <div className="nav__equipment">
                    <div className="nav__equipment-title">
                        <EquipmentIcon class="title-icon" /> Оборудование
                    </div>
                    <div className="nav__equipment-links">
                        <div className="nav__equipment-link">
                            Формы для сыра
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                        <div className="nav__equipment-link">
                            Латексное покрытие
                        </div>
                        <div className="nav__equipment-link">
                            Воск для сыра
                        </div>
                        <div className="nav__equipment-link">
                            Термоусадочные пакеты
                            <ArrowRightIcon  class="link__arrow-right"/>
                            <DropDownLinks />
                        </div>
                        <div className="nav__equipment-link">
                            Дренажные коврики
                        </div>
                        <div className="nav__equipment-link">
                            Дренажные мешки и салфетки для прессования
                        </div>
                        <div className="nav__equipment-link">
                            Дренажные контейнеры
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav;