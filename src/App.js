import React, { Fragment } from 'react';
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyle} from './styles/GlobalStyles'
import {ListOfPhotoCards} from './Container/ListOfPhotoCards'
import {Logo} from './components/Logo'
import {PhotoCardWithQuery} from './Container/PhotoCardWithQuery'

export const App=()=>{
    const urlParams= new window.URLSearchParams(window.location.search);
    const detalId= urlParams.get('detail');

    return (
    <div>
        <GlobalStyle/>
        <Logo/>
        {
            detalId ? <PhotoCardWithQuery id={detalId}/>:
            <Fragment>
                 <ListOfCategories/>
        <ListOfPhotoCards categoryId={3}/>
            </Fragment>
        }
       
    </div>);
}