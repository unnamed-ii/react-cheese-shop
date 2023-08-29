import React from 'react';
import './style.scss';
import {DropDownLinks} from "./drop-down-links";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right-grey.svg";
import {ReactComponent as IngredientsIcon} from "../../images/icons/main-nav/ingredients.svg";
import {ReactComponent as EquipmentIcon} from "../../images/icons/main-nav/equipment.svg";
import {MainNavConstants} from "./constants";
import {Link} from "react-router-dom";

const MainNav = () => {
    return (
        <div className="wrapper-nav">
            <div className="nav">
                <div className="nav__ingredients">
                    <div className="nav__ingredients-title">
                        <IngredientsIcon className="title-icon"/> Ингредиенты
                    </div>
                    <div className="nav__ingredients-links">
                        {MainNavConstants.ingredients.map((i, idx) => (
                            <div className="nav__ingredients-link" key={idx}>
                                <Link to="/category">
                                    {i.title}
                                </Link>
                                {i.isListIncluded &&
                                <>
                                    <ArrowRightIcon className="link__arrow-right"/>
                                    <DropDownLinks/>
                                </>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="nav__equipment">
                    <div className="nav__equipment-title">
                        <EquipmentIcon className="title-icon"/> Оборудование
                    </div>
                    <div className="nav__equipment-links">
                        {MainNavConstants.equipment.map((i, idx) => (
                            <div className="nav__equipment-link" key={idx}>
                                <Link to="/category-page">
                                    {i.title}
                                </Link>
                                {i.isListIncluded &&
                                <>
                                    <ArrowRightIcon className="link__arrow-right"/>
                                    <DropDownLinks/>
                                </>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav;