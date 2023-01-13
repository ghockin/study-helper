import React from 'react';
import './Header.css'
import LogoSolent from '../../images/logo-solent.png';


function Header() {
    return (
        <div className='HeaderContainer'>
            <div className='UpperContainer'>
                <div className='Logo'> <img src={LogoSolent} alt="solent logo" /></div>
                <div className='Title'><h1>Study Planner</h1></div>
            </div>
        </div>
    )
}

export default Header