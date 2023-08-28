import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import Wrapper from "../../components/wrapper";
import Title from "../../components/title";

const NotFound = () => {
    return (
        <Wrapper>
            <div className="not-found">
                <Title
                    title={"404 Not Found"}
                    className={"not-found-page"}
                />
                <Link to="/">Go back to Home Page</Link>
            </div>
        </Wrapper>
    );
};

export default NotFound;