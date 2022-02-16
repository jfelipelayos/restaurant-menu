import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DishItem from './DishItem/DishItem'
import Pagination from './Pagination/Pagination'
/* eslint-disable react/prop-types */
/* eslint no-unused-vars: 0 */

function DishList ({ setHomeSection, menuDishes, setMenuDishes }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [dishesPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=fd5d536af3a44b3e921b63dde110302b&number=100')
      setPosts(response.data.results)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const idxOfLastPost = currentPage * dishesPerPage
  const idxOfFirstPost = idxOfLastPost - dishesPerPage
  const currentPosts = posts.slice(idxOfFirstPost, idxOfLastPost)

  const onClickReturn = () => {
    setHomeSection('menu')
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="">
      <div className='d-flex justify-content-between mb-4'>
        <h2>Platos disponibles</h2>
        <button className='btn btn-primary' onClick={onClickReturn}>Regresar a tu menú</button>
      </div>
      <DishItem menuDishes={menuDishes} setMenuDishes={setMenuDishes} posts={currentPosts} loading={loading}/>
      <Pagination setHomeSection={setHomeSection} dishesPerPage={dishesPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default DishList
