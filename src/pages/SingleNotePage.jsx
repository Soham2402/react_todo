import React from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import BackSvg from '../assets/back.svg'


function SingleNotePage(props){

      const {id} = useParams()
      const navigate = useNavigate()

      // #Execute get note only when the id changes
      const [note, setNote] = useState("")
      useEffect(()=>{
          getNote()
      },[id])

      
      //getting data from api
      let getNote = async () =>{
        let response = await fetch(`http://localhost:3000/notes/${id}`)
        let data = await response.json()
        setNote(data)
      }

      let createNote = async ()=> {
        await fetch(`http://localhost:3000/notes/`,{
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({...note, 'updated': new Date() })
        })
      }

      //Sends a put request to our json server
      let updateNote = async ()=> {
        await fetch(`http://localhost:3000/notes/${id}/`,{
          method: 'PUT', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({...note, 'updated': new Date() })
        })
      }

      // Sends a delete request to delete note
      let handleDelete = async () => {
        await fetch(`http://localhost:3000/notes/${id}/`,{
          method: 'DELETE', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(note)
        })

        navigate('/')
      }

      //If note body empty delete note else update the note
      let handleSubmit = () =>{
        if(!note.body){
          handleDelete()
        }else if(id === 'new'){
          createNote()
          navigate('/')
        }else{
          updateNote()
        }
      }


  return (
    <div className='note'>
      <div className="note-header">
        <h3>

          <Link onClick={handleSubmit} to={'/'}><img src={BackSvg} alt="Back"  /></Link>
          
        </h3>
        
        {id != 'new' ? (
                    <h3 onClick={handleDelete}>Delete</h3>
                ) : (
                    <h3 onClick={handleSubmit}>Done</h3>
                )}
      </div>
      
      <textarea onChange={(e) => {setNote({...note, 'body':e.target.value  })}} value={note?.body}></textarea>

    </div>
  )
}

export default SingleNotePage
