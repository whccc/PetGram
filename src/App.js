import React from 'react';
import {GlobalStyle} from './styles/GlobalStyles'
import {Logo} from './components/Logo'
import {Home} from './Page/Home'
import {Detail} from './Page/Detail'
import {Router} from '@reach/router'
import {NavBar} from './components/NavBar'



export const App=()=>{
    const urlParams= new window.URLSearchParams(window.location.search);
    const detalId= urlParams.get('detail');

    return (
    <div>
        <GlobalStyle/>
        <Logo/>
            <Router>
                <Home path='/'/>
                <Home path='/pet/:id'/>
                <Detail path='/detail/:detailId'/>
            </Router>
        <NavBar/>
       
    </div>);
}