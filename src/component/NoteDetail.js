import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';


function NoteDetail({ title, createdAt, body}) {
    return (
    <div className="note-detail">
        <h3 className='mt-4'
        >
          {title}
        </h3>

        <p className='mt-4'
        >
          {showFormattedDate(createdAt)}
        </p>

        <p className='mt-4'
        >
          {body}
        </p> 
    </div>
    );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

};

export default NoteDetail;