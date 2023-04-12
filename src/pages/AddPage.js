import React from 'react';
import NoteInput from '../component/NoteInput';
import { addNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate();
  
    async function onAddNoteHandler(note) {
      const add = await addNote(note);
      console.log(add)
      navigate('/');
    }
    return (
        <section>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;