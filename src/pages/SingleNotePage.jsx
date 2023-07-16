import React from 'react'
import { Link, useParams } from 'react-router-dom'

import notes from '../assets/data'
import BackSvg from '../assets/back.svg'


function SingleNotePage(props){
  const {id} = useParams()


  let curr_note = notes.find(note => note.id == id)

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <Link to={'/'}><img src={BackSvg} alt="Back"  /></Link>
        </h3>
      </div>

      
      <textarea value={curr_note?.body}></textarea>

      {curr_note?.body}
    </div>
  )
}

export default SingleNotePage
