import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete } from 'react-icons/ai';


function Delete({ id, onDelete }) {
  return <button className='flex items-center justify-center text-4xl 
  border-0 w-12 h-12 rounded-full bg-[#153448] text-[#948979] p-2 
  cursor-pointer' onClick={() => onDelete(id)}><AiOutlineDelete/></button>
}

Delete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Delete;