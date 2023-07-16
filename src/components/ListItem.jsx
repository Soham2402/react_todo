import React from 'react'


import { Link } from 'react-router-dom'

const ListItem = (props) => {

  return (
      <Link to={`/note-page/${props.note.id}`}>
        <div key={props.note.id} className="notes-list-item">
          <h3>{props.note.body}</h3>
        </div>
      </Link>
  )
}

export default ListItem