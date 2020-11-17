import React from 'react';
import {GlobalStyle} from './styles/GlobalStyles'
import {Logo} from './components/Logo'
import {Home} from './Page/Home'
import {Detail} from './Page/Detail'
import {Router} from '@reach/router'
import {NavBar} from './components/NavBar'
import {Favs} from './Page/Favs'
import {User} from './Page/User'
import {NotRegisteredUser} from './Page/NotRegisteredUser'
import Context from './Context'


export const App=()=>{
    const urlParams= new window.URLSearchParams(window.location.search);

    return (
    <div>
        <GlobalStyle/>
        <Logo/>
            <Router>
                <Home path='/'/>
                <Home path='/pet/:id'/>
                <Detail path='/detail/:detailId'/>
            </Router>
            <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </Context.Consumer>
        <NavBar/>
       
    </div>);
}