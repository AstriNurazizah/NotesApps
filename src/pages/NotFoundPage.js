import React from 'react';
import { LocaleContext } from '../context/Context';

function NotFoundPage(){
    const { locale } = React.useContext(LocaleContext);
    return(
        <>
            <h1>{locale === 'id' ? '404 - PAGE NOT FOUND' : '404 - HALAMAN TIDAK DITEMUKAN'}</h1>
        </> 
    )
}

export default NotFoundPage;