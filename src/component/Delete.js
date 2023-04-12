import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete } from 'react-icons/ai';


function Delete({ id, onDelete }) {
  return <button className='item-delete' onClick={() => onDelete(id)}><AiOutlineDelete/></button>
}

Delete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Delete;