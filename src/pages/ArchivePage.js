import React, { useEffect, useState } from 'react';
import {
    getArchivedNotes,
    deleteNote,
    unarchiveNote,
  } from '../utils/api';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import { LocaleContext } from '../context/Context';
import loading from '../img/Loading.gif';

function ArchivePage(){
    const { locale } = React.useContext(LocaleContext);

    const [notes,setNotes] = useState(null);
    const [keyword,setKeyword] = useState('');
    const [load, setLoad] = useState(true);
    let filteredNote = ''

    useEffect(() => {
        getArchivedNotes().then(({ data }) => {
          setNotes(data);
          setLoad(false)
        });
    }, []);

    async function onDeleteHandler(id) {
        setLoad(true)
        await deleteNote(id);   
        const {data} = await getArchivedNotes()
        setNotes(data)
        setLoad(false)
    }

    async function unarchiveHandler(id) {
        setLoad(true)
        await unarchiveNote(id);
        const {data} = await getArchivedNotes();
        setNotes(data);
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
        <section className='note-app'>
            <h2>{locale === 'id' ? 'Catatan Diarsipkan' : 'Archived Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {load  
                ? <img className='ing' src={loading} alt='loading'/>
                : <NoteList 
                notes={filteredNote} 
                onDelete={onDeleteHandler} 
                unArchive={unarchiveHandler}
              />
            }

        </section>
    )
}



export default ArchivePage;