/* eslint react/prop-types: 0 */
import React from 'react'
import Swal from 'sweetalert2'

function Header ({ logout, user }) {
  const onClick = () => {
    Swal.fire({
      title: 'Do you want to close the session?',
      showCancelButton: true,
      confirmButtonText: 'Exit'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Session Closed')
        logout()
      }
    })
  }
  return (
    <nav className="navbar navbar-light bg-light container-fluid px-5">
      <a className="navbar-brand">Restaurant Menu</a>
      {user && (
        <button className="btn btn-danger" onClick={() => onClick()}>Salir</button>
      )}
    </nav>
  )
}

export default Header
