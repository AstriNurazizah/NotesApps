import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types'
import { LocaleContext } from '../context/Context'


function NoteList({ notes, onDelete, onArchive, unArchive }) {
  const { locale } = React.useContext(LocaleContext);
  
  if (!notes.length) {
    return <h2>{locale === 'id' ? 'Tidak ada catatan' : 'Note list is empty'}</h2>;
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4 px-4 py-2">
    { 
        notes.map((note) => (
          <NoteItem 
            key={note.id} 
            id={note.id}
            onDelete={onDelete} 
            onArchive={onArchive}
            unArchive={unArchive}
            {...note}
      />
      ))
    }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  unArchive: PropTypes.func,
}

export default NoteList