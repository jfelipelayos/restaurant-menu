/* eslint react/prop-types: 0 */
import React from 'react'
import Swal from 'sweetalert2'

function Header ({ logout, user }) {
  const onClick = () => {
    Swal.fire({
      title: 'Quieres cerrar la sesión?',
      showCancelButton: true,
      confirmButtonText: 'Salir',
      confirmButtonColor: '#3B6FC9'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Sesion cerrada',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#3B6FC9',
          timer: 3000
        })
        logout()
      }
    })
  }
  return (
    <nav className="navbar navbar-light bg-light container-fluid px-5">
      <a className="navbar-brand">Restaurant Menú</a>
      {user && (
        <button className="btn btn-danger" onClick={() => onClick()}>Salir</button>
      )}
    </nav>
  )
}

export default Header
