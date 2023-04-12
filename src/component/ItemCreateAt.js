import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../utils';

function ItemcreatedAt({ createdAt }) {
  return (
    <div>
        <p className="item-createdAt">
            { showFormattedDate(createdAt) } 
        </p>
    </div>
    
  )
}

ItemcreatedAt.propTypes = {
  createdAt: PropTypes.string.isRequired
}

export default ItemcreatedAt