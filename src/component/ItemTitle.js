import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ItemTitle({ id, title }) {
  return (
    <Link
    to={`/notes/${id}`}
    title={title}
    >
    <h3 className="item-title"
    >
        { title }
    </h3>
      </Link>
    
  )
}

ItemTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ItemTitle
