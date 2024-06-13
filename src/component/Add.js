import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlusCircle } from 'react-icons/fi'; 

 
function Add() {
  return (
      <ul className=''>
        <li><Link to="/add"><FiPlusCircle/></Link></li>
      </ul>
  );
}
 
export default Add;