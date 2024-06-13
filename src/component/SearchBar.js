import React from "react";
import { PropTypes } from "prop-types";
import { LocaleContext } from '../context/Context'

function SeacrhBar ({keyword, keywordChange}) {
    const { locale } = React.useContext(LocaleContext);
    return (
        <div className="mt-4">
            <input className="bg-transparent border-2 border-neutral-600 rounded px-3 py-2 w-1/2"
            type="text"
            placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)} />
            
        </div>
        
    )
}

SeacrhBar.PropType ={
    keyword: PropTypes.string.isRequired,
    keywordChage: PropTypes.func.isRequired
}

export default SeacrhBar;