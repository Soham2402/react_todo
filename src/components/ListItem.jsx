import React from 'react'


import { Link } from 'react-router-dom'

const ListItem = ({note}) => {


  //setting title
  const noteTitle = (note)=>{
    let title = note.body.split('\n')[0]
    if(title.length > 30){
      title = title.slice(0,30)
      title = title.concat('  ...')
      return title
    }
    return title
  } 

  // setting and formating date
  const getDate = (note) =>{
    let date = note.updated
    date = new Date(date).toLocaleDateString()
    return date
  }

  // setting content peak
  const getExtraCont = (note) =>{
    let content = note.body
    let title = noteTitle(note)
    content = content.replaceAll('\n',"")
    let remContent = content.replaceAll(title,"")

    if(remContent.length > 50){
      remContent = remContent.slice(0,50)
      remContent = remContent.concat('  ...')
      return remContent
    }
    return remContent
  }

  


  return (
      <Link to={`/note-page/${note.id}`}>
        <div  className="notes-list-item">
          <h3>{noteTitle(note)}</h3>
          <p>{getDate(note)}</p>
          <p>{getExtraCont(note)}</p>
        </div>
      </Link>
  )
}

export default ListItem