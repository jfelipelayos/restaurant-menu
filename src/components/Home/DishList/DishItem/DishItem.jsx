import React from 'react'
import './DishItem.css'
import Swal from 'sweetalert2'
/* eslint-disable react/prop-types */
/* eslint no-unused-vars: 0 */

function DishItem ({ posts, loading, menuDishes, setMenuDishes }) {
  const handleAddBtn = (dish) => {
    setMenuDishes([...menuDishes, dish])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Plato agregado',
      showConfirmButton: false,
      timer: 1500
    })
  }

  if (loading) {
    return <h2 className='mt-5'>Cargando platos...</h2>
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className="list-group-item d-flex justify-content-between dish-info">
          <div className="container">
            <h3 className='fs-6 fw-bold mr-2'>{post.title}</h3>
            <button className={'btn btn-primary mt-3'} onClick={() => handleAddBtn(post) }>Agregar al menú</button>
          </div>
          <img src={post.image} alt="Imagen del plato" className='rounded img-fluid dish-img'/>
        </li>
      ))}
    </ul>
  )
}

export default DishItem
