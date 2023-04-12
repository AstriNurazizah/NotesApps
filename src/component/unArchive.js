import React from 'react';
import PropTypes from 'prop-types';
import {FiArchive } from 'react-icons/fi';

function UnArchive({ id, unArchive }) {
  return <button className='item-archive' onClick={() => unArchive(id)}><FiArchive/></button>
}

UnArchive.propTypes = {
  id: PropTypes.string.isRequired,
  unArchive: PropTypes.func.isRequired
}

export default UnArchive;