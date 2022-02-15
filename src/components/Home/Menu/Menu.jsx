import React from 'react'
/* eslint-disable react/prop-types */
function Menu ({ menuDishes, setHomeSection }) {
  const onClickAdd = () => {
    setHomeSection('dishes')
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
          : (<h1>hello</h1>)
      }
    </>
  )
}

export default Menu
