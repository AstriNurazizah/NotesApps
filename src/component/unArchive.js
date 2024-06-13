import React from 'react';
import PropTypes from 'prop-types';
import {FiArchive } from 'react-icons/fi';

function UnArchive({ id, unArchive }) {
  return <button className='flex items-center justify-center text-4xl 
  border-0 w-12 h-12 rounded-full bg-[#153448] text-[#948979] p-2 
  cursor-pointer' onClick={() => unArchive(id)}><FiArchive/></button>
}

UnArchive.propTypes = {
  id: PropTypes.string.isRequired,
  unArchive: PropTypes.func.isRequired
}

export default UnArchive;