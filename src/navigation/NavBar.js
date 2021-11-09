import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavBar } from './NavBar.styled';

const NavBar = () => {
    return (
        <StyledNavBar>
            <div>
                <NavLink to='/'>To ja</NavLink>
                <NavLink to='/na-plotnie'>Na płótnie</NavLink>
                <NavLink to='/szkice'>Szkice</NavLink>
            </div>
        </StyledNavBar>
    );
}

export default NavBar;
