import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api';
import NoteDetail from '../component/NoteDetail';
import NotFoundPage from '../pages/NotFoundPage';

function DetailPageWrapper(){
  const [notes,setNotes] = useState();
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNotes(data);
      setLoad(false)
    });
  }, [id]);


  if(load){
  }
  else{
    if(notes){
      return (
        <section>
          <NoteDetail {...notes} />
        </section>
      );
    }
    else{
      return <NotFoundPage />
    }
  }
}

 
export default DetailPageWrapper;