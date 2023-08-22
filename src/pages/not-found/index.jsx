import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import Wrapper from "../../components/wrapper";
import PageTitle from "../../components/page-title";

const NotFound = () => {
    return (
        <Wrapper>
            <div className="not-found">
                <PageTitle title={"404 Not Found"}/>
                <Link to="/">Go back to Home Page</Link>
            </div>
        </Wrapper>
    );
};

export default NotFound;