import React, { useEffect, useState } from 'react';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import { deleteNote, getActiveNotes, archiveNote } from '../utils/api';
import loading from '../img/Loading.gif';
import { LocaleContext } from '../context/Context';


function HomePage() {
  const { locale } = React.useContext(LocaleContext);

  const [notes,setNotes] = useState()
  const [keyword,setKeyword] = useState('')
  const [load, setLoad] = useState(true);
  let filteredNote = '';

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
      setLoad(false)
    });
  }, []);

  async function onArchiveHandler(id) {
    setLoad(true);
    await archiveNote(id);
    const {data} = await getActiveNotes();
    setNotes(data);
    setLoad(false);
}

  async function onDeleteHandler(id) {
    setLoad(true)
    await deleteNote(id);
    const {data} = await getActiveNotes()
    setNotes(data)
    setLoad(false)
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
  }

  if(notes){
    filteredNote = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());  
    })
  }


  return (
    <section>
    <h2>{locale === 'id' ? 'Catatan Aktif' : 'Notes aktive'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} /> 
      {load
          ? <img className='ing' src={loading} alt='loading'/>
      : <NoteList 
      notes={filteredNote} 
      onDelete={onDeleteHandler} 
      onArchive={onArchiveHandler}
      />
      }
    </section>
  )
}

export default HomePage