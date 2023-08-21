import React from 'react';

const ArticleInfo = ({paragraph}) => {
    return (
        <div className="article__inner-content__info">
            <div className="title">
                {paragraph?.title}
            </div>
            <div className="text">
                {paragraph?.text}
            </div>
        </div>
    );
};

export default ArticleInfo;