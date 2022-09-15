import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='page'>
      {
      pageNumbers.map(number =><button onClick={()=> setCurrentPage(number)}> {number} </button>)
      }
    </div>
  )
}
export default Pagination;
