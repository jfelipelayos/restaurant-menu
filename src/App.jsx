import './App.css'
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import SignIn from './Auth/SignIn/SignIn'
import Header from './components/Header/Header'
import axios from 'axios'
import Swal from 'sweetalert2'

function App () {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const u = localStorage.getItem('user')
    u && JSON.parse(u) ? setUser(true) : setUser(false)
  }, [])

  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user])

  const logIn = (data) => {
    Swal.fire({
      title: 'Iniciando Sesión',
      html: 'Porfavor espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    axios.post('http://challenge-react.alkemy.org/', {
      email: data.email,
      password: data.password
    })
      .then(function ({ data }) {
        Swal.close()
        setUser(true)
        localStorage.setItem('token', data.token)
      })
      .catch(function (error) {
        Swal.fire({
          title: 'Error al iniciar sesión',
          html: error.headers,
          icon: 'error',
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer: 1500,
          showConfirmButton: false
        })
      })
  }

  return (
    <>
    <Header logout={() => setUser(false)} user={user}/>
      <Routes>
        {!user && (
        <Route
          path='/auth'
          element={<SignIn setUser={setUser} logIn={logIn}/>}
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
