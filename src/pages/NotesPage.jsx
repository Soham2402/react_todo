import React, {useState, useEffect} from 'react'

import ListItem from '../components/ListItem.jsx'
import AddIcon  from '../components/AddIcon.jsx'

const NotesPage = () => {
  
  const [notes, setNotes] = useState([])

  useEffect(()=>{
    getNotes()
  },[])

  
  let getNotes = async () => {
    let response = await fetch("http://localhost:3000/notes")
    let data = await response.json()
    setNotes(data)
  }

  
  return (
    <div className='notes'>

      <div className="notes-header">
        <h2 className='notes-title'>&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      
        <div className="notes-list">
          {notes.map(note => {
            return <ListItem  key={note.id} note = {note} />
          })}
        </div>

          <AddIcon />

      </div>
  )
}

export default NotesPage
