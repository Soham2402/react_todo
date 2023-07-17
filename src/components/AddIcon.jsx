import React from 'react'

import { Link } from 'react-router-dom'

import AddButton from '../assets/add.svg'


const AddIcon = () => {
  return (
    <div>

      <Link className='floating-button' to={'/note-page/new'}><img src={AddButton} alt="ADD"  /></Link>
    </div>
  )
}

export default AddIcon
