import React from 'react';
import './style.scss'
import {useLocation, Link, NavLink} from 'react-router-dom';
import Wrapper from "../wrapper";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/arrow-right-grey.svg";

const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path);

    return paths.length ? (
        <Wrapper>
            <nav className="breadcrumb">
                <ol>
                    <li>
                        <Link to="/">
                            Home
                            <ArrowRightIcon/>
                        </Link>
                    </li>
                    {paths.map((path, idx) => {
                        const routePath = `/${paths.slice(0, idx + 1).join('/')}`;
                        const isLast = idx === paths.length - 1;
                        return (
                            <li key={idx} className={`${isLast ? 'active' : ''}`}>
                                {isLast ? path :
                                    <NavLink to={routePath}>
                                        {path}
                                        <ArrowRightIcon/>
                                    </NavLink>
                                }
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </Wrapper>
    ) : null;
};

export default Breadcrumbs;