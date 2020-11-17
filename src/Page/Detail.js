import React from 'react'
import {PhotoCardWithQuery} from '../Container/PhotoCardWithQuery'

export const Detail =({detailId})=>{
    return(
        <PhotoCardWithQuery id={detailId}/>
    );
}