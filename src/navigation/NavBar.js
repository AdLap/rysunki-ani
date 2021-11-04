import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavBar } from './NavBar.styled';

const NavBar = () => {
    return (
        <StyledNavBar>
            <div>
                <NavLink to='/'>To ja</NavLink>
                <NavLink to='/'>Na płótnie</NavLink>
                <NavLink to='/'>Na papierze</NavLink>
            </div>
        </StyledNavBar>
    );
}

export default NavBar;