import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';


function NoteDetail({ title, createdAt, body}) {
    return (
    <div className="note-detail">
        <h3 className='note-detail-title'
        >
          {title}
        </h3>

        <p className='note-detail-createdAt'
        >
          {showFormattedDate(createdAt)}
        </p>

        <p className='note-detail-body'
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