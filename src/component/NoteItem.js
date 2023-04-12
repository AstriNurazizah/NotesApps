import React from 'react'
import PropTypes from 'prop-types'
import ItemBody from './ItemBody'
import ItemCreateAt from './ItemCreateAt'
import ItemTitle from './ItemTitle'
import Delete from './Delete';
import Archive from './Archive';
import UnArchive from './unArchive';


function NoteItem({ id, title, createdAt, body,archived, onDelete, onArchive, unArchive}) {
  return (
    <article className="note-item">
    <div className="note-item-content">
      <ItemTitle
          id={id}
          title={title}
        />
        <ItemCreateAt
          createdAt={createdAt}
        />
        <ItemBody
          body={body}
        />

<div className='note-item-action'>
                  {
                      archived ?
                        <UnArchive unArchive={unArchive} id={id} />
                      : <Archive onArchive={onArchive} id={id} />
                  }
                  <Delete id={id} onDelete={onDelete}  />
            </div>
    </div>




    </article>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  unArchive: PropTypes.func

}

export default NoteItem