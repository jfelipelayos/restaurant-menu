import React from 'react'
import Swal from 'sweetalert2'

/* eslint-disable react/prop-types */
function Menu ({ menuDishes, setMenuDishes, setHomeSection }) {
  const onClickAdd = () => {
    setHomeSection('dishes')
  }
  const handleRemoveBtn = (id) => {
    Swal.fire({
      title: 'Quieres eliminar el plato?',
      showCancelButton: true,
      confirmButtonColor: '#B84743',
      confirmButtonText: 'Quitar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Plato eliminado', '', 'success')
        const result = menuDishes.filter(dish => dish.id !== id)
        setMenuDishes(result)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h1>Menú</h1>
        <button className='btn btn-primary' onClick={onClickAdd}>Agregar</button>
      </div>
      {
        menuDishes.length === 0
          ? (<span className='text-small d-block mb-2'>
            No tiene ningun plato en su menú, por favor agregue alguno. . .
        </span>)
          : (
            <ul className='list-group mb-4'>
            {menuDishes.map(dish => (
              <li key={dish.id} className="list-group-item d-flex justify-content-between dish-info">
                <div className="container">
                  <h3 className='fs-6 fw-bold mr-2'>{dish.title}</h3>
                  <button className={'btn btn-danger mt-3'} onClick={() => handleRemoveBtn(dish.id)}>Borrar del menu</button>
                </div>
                <img src={dish.image} alt="Imagen del plato" className='rounded img-fluid dish-img'/>
              </li>
            ))}
          </ul>
            )
      }
    </>
  )
}

export default Menu
