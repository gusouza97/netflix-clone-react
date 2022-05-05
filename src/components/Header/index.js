import React from 'react';
import './styles.css';
import logo from '../../img/netflix_logo.png'
import avatar from '../../img/netflix_avatar.png'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src={logo} alt="Netflix"/>
                </a>
            </div>
            <div className='header--user'>
                <a href=''>
                    <img src={avatar} alt='profile'/>
                </a>
            </div>
        </header>
    )
}