import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";
import Wrapper from "../../components/wrapper";

const NotFound = () => {
    return (
        <Wrapper>
            <div className="not-found">
                <h1>404 Not Found</h1>
                <Link to="/">Go back to Home Page</Link>
            </div>
        </Wrapper>
    );
};

export default NotFound;