import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavBar } from './NavBar.styled';

const NavBar = () => {
    return (
        <StyledNavBar>
            <NavLink to='/'>To ja</NavLink>
            <NavLink to='na-plotnie'>Na płótnie</NavLink>
            <NavLink to='szkice'>Szkice</NavLink>
            <NavLink to='kontakt'>Kontakt</NavLink>
        </StyledNavBar>
    );
}

export default NavBar;
