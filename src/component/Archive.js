import React from 'react';
import PropTypes from 'prop-types';
import {FiArchive } from 'react-icons/fi';

function Archive({ id, onArchive }) {

  return <button className='flex items-center justify-center text-4xl 
  border-0 w-12 h-12 rounded-full bg-[#153448] text-[#948979] p-2 
  cursor-pointer' onClick={() => onArchive(id)}><FiArchive/></button>

  
}

Archive.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default Archive;