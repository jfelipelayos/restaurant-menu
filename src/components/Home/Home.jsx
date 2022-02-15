import React, { useState } from 'react'
import DishList from './DishList/DishList'
import Menu from './Menu/Menu'
/* eslint no-unused-vars: 0 */

function Home () {
  const [homeSection, setHomeSection] = useState('menu')
  const [menuDishes, setMenuDishes] = useState([])

  return (
    <div className='container mt-5'>
      {
        homeSection === 'menu'
          ? (<Menu menuDishes={menuDishes} setHomeSection={setHomeSection}/>)
          : (<DishList setHomeSection={setHomeSection}/>)
      }
    </div>

  )
}

export default Home
