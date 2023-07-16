import { useState } from 'react'
import { Component }  from 'react'

import './styles.css'

import Header from "./components/Header.jsx"
import NotesPage from './pages/NotesPage.jsx'
import SingleNotePage from './pages/SingleNotePage.jsx'

import {Route, Routes } from 'react-router-dom'


export default function App(){
  return (

      <div className='container dark' >
        <div className="app">
          <Header />
          <Routes>
              <Route path='/' element={<NotesPage/>} exact/>
              <Route path='/note-page/:id' element= {<SingleNotePage/>} />
          </Routes>
        </div>
      </div>
  )
}