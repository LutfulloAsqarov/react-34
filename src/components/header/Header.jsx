import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";

const Header = () => {
    let { pathname } = useLocation();

    let isLogin = localStorage.getItem("x-auth-token");

    if (
        pathname === "/admin/createProduct" ||
        pathname === "/admin/manageProduct"
    ) {
        return <></>;
    }

    return (
        <header id="header">
            <div className="container header">
                <div className="header__logo">
                    <Link to={"/"}>RTK</Link>
                </div>
                <ul className="header__list">
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink
                            className={"header__list__link"}
                            to={isLogin ? "/admin/createProduct" : "/login"}
                        >
                            {isLogin ? "Account" : "Login"}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
