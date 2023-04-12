import React from 'react';
import PropTypes from 'prop-types';
import {FiArchive } from 'react-icons/fi';

function Archive({ id, onArchive }) {

  return <button className='item-archive' onClick={() => onArchive(id)}><FiArchive/></button>

  
}

Archive.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default Archive;