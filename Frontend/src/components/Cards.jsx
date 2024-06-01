import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className='my-8 ml-2 '>
        <div className="card w-[300px] h-[390px] bg-base-100 shadow-xl hover:scale-105 duration-300 bg-white text-black dark:bg-slate-900 dark:text-white dark:border" >
          <figure><img className='w-full' src={item.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary px-2 py-1" style={{ backgroundColor: '#ff69b4', color: 'white' }}>{item.category}</div>
            </h2>
            <p className='mt-2'>{item.title}</p>
            <div className="card-actions  justify-around ">
              <div className="badge badge-outline mt-2 mr-8">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// max-w-sm rounded overflow-hidden shadow-lg
// class="w-full"
export default Cards;

