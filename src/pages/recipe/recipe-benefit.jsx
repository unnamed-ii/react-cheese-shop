import React from 'react';
import InstructionStep from "../../components/instruction-step";
import recipeBenefit from "../../images/recipe-page-benefit.png";

const RecipeBenefit = ({instruction}) => {
    return (
        <div className="benefit">
            <div className="benefit__title">
                Польза сыра
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
                    Как приготовить в домашних условиях
                </div>
                <div className="benefit__instruction-steps">
                    {instruction?.map((step, idx) =>
                        <InstructionStep
                            key={step.id}
                            number={'0' + (idx + 1)}
                            text={step}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeBenefit;