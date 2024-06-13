import React from 'react'
import PropTypes from 'prop-types'

function ItemBody({ body }) {
  return (
        <p className='item-bodymt-4 overflow-hidden line-clamp-6'>
            {body}
        </p>
        
  )
}

ItemBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default ItemBody;