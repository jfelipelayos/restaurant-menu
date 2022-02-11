import './App.css'
/* eslint no-unused-vars: 0 */
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Auth/Home/Home'
import SignIn from './Auth/SignIn/SignIn'
import Header from './components/Header/Header'

function App () {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const u = localStorage.getItem('user')
    u && JSON.parse(u) ? setUser(true) : setUser(false)
  }, [])

  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user])

  return (
    <>
    <Header logout={() => setUser(false)} user={user}/>
      <Routes>
        {!user && (
        <Route
          path='/auth'
          element={<SignIn authenticate={() => setUser(true)}/>}
          />
        )}
        {user && (
          <>
            <Route
            path='/home'
            element={<Home/>}
            />
          </>
        )}
        <Route path='*' element={<Navigate to={user ? '/home' : '/auth'}/>}/>
      </Routes>
    </>
  )
}

export default App
