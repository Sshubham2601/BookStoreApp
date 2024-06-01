import React from 'react'
// import banner from "/Banner.jpg"
function Banner() {
          return (
                    <>
                              <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
                                        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36'>
                                                  <div className='space-y-8'>
                                                            <h1 className='text-2xl md:text-4xl  font-extrabold'>Hello, welcome here to learn something {" "}
                                                                      <span className='text-pink-500'>new everyday!!!</span></h1>
                                                            <p className='text-base font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio illo, nemo laboriosam eius sunt qui optio libero necessitatibus doloribus, illum ducimus hic quae voluptate pariatur eveniet quos adipisci voluptatibus et exercitationem deserunt saepe cum excepturi!</p>
                                                            <label className="input flex items-center gap-2 border px-3" style={{ backgroundColor: '#f1f2f6', color: 'white' }} >
                                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-pink-500"> {/* Apply text-pink-500 class for pink color */}
                                                                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                                                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                                                      </svg>
                                                                      <input type="text" className="grow outline-none border-none" placeholder="Email" /> {/* Apply outline-none class to remove default outline and focus classes for custom focus styles */}
                                                            </label>
                                                  </div>
                                                  <button className="btn btn-secondary mt-6" style={{ backgroundColor: '#ff69b4', color: 'white' }}>Get Started</button>



                                        </div>


                                        <div className='order-1 w-full md:w-1/2 '>
                                                  <img  src="/Images/banner2.png" alt="" className='w-full h-100 ' />
                                        </div>
                              </div>
                    </>
          )
}

export default Banner
