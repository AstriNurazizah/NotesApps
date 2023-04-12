import React from 'react'
import PropTypes from 'prop-types'

function ItemBody({ body }) {
  return (
        <p className='item-body'>
            {body}
        </p>
        
  )
}

ItemBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default ItemBody;