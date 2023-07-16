import React from 'react'
import notes from '../assets/data.js'
import ListItem from '../components/ListItem.jsx'


const NotesPage = () => {
  
  return (
    <div className='notes'>

      <div className="notes-header">
        <h2 className='notes-title'>&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      
        <div className="notes-list">
          {notes.map(note => {
            return <ListItem  note = {note} />
          })}
        </div>
      </div>
  )
}

export default NotesPage
