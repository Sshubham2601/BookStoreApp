import React from 'react'

function Cards({item}) {
  return (
   <>
   <div className=''>
   <div className="max-w-xl rounded overflow-hidden shadow-lg my-3 px-3 hover:scale-105 duration-200 dark:border-2 " >
  <figure><img className='w-full' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary px-2 py-1" style={{ backgroundColor: '#ff69b4', color: 'white' }}>{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-around ">
      <div className="badge badge-outline border "  style={{ backgroundColor: '#888587', color: 'white', }}>${item.price}</div> 
      <div className="badge badge-outline border-[2px] cursor-pointer hover:bg-pink-500 duration-200 hover:text-white px-2 py-1">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}
// max-w-sm rounded overflow-hidden shadow-lg
// class="w-full"
export default Cards
