import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem 2rem;
    z-index: 1;
`

const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;

    & li {
        transition: all 300ms linear 0s;
    }

    & a {
        font-size: 1.6rem;
        line-height: 2;
        color: #dfe6e9;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
        }
    }
`

const Li = styled.li`
    text-decoration: none;
    color: var(--mainWhite);

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Navbar = () => {
    return (
        <Nav>
            <NavLinks>
                <Li>
                    <StyledLink to="/">Home</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/about">About Me</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/contact">Contact</StyledLink>
                </Li>
            </NavLinks>
        </Nav>
    )
}

export default Navbar;