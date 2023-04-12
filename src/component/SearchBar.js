import React from "react";
import { PropTypes } from "prop-types";
import { LocaleContext } from '../context/Context'

function SeacrhBar ({keyword, keywordChange}) {
    const { locale } = React.useContext(LocaleContext);
    return (
        <div className="search-bar">
            <input className=""
            type="text"
            placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}/>
            
        </div>
        
    )
}

SeacrhBar.PropType ={
    keyword: PropTypes.string.isRequired,
    keywordChage: PropTypes.func.isRequired
}

export default SeacrhBar;