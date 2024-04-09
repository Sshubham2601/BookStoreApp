import React from 'react'
function Contact() {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        {/* <dialog id="my_modal_3" className="modal-box"> */}
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        {/* </dialog> */}
      </div>
    </>
  )
}

export default Contact
