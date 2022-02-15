import React from 'react'
/* eslint-disable react/prop-types */
/* eslint no-unused-vars: 0 */
function Pagination ({ dishesPerPage, totalPosts, paginate, setHomeSection }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / dishesPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleClick = (e, number) => {
    setHomeSection('dishes')
    e.preventDefault()
    paginate(number)
    window.scrollTo(0, 0)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={(e) => { handleClick(e, number) }} href="!#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
