/* eslint react/prop-types: 0 */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function SignIn ({ authenticate }) {
  const navigate = useNavigate()
  const onClick = () => {
    authenticate()
    navigate('home')
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Session Iniciada',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <form className='container mt-5'>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Direccion de correo</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="exampleInputPassword1">Contraseña</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => onClick()}>Enviar</button>
    </form>
  )
}

export default SignIn
