import React from 'react'

const Inputs = ({ answers }) => {
   return (
      <div className='for-r mb-4 md:mb-14 md:block flex flex-col items-center'>
         {answers.map((e, i) => (<div className='mb-3' key={i}>
            <p className='font-bold mb-2'>{e.title}</p>
            <input type="text" className='border p-3 border-gray-300 rounded outline-none md:w-72 lg:w-96' placeholder={e.placeholder}/>
            {e.bottom && <p className='text-gray-500 mt-2 text-sm'>{e.bottom}</p>}
         </div>))}
      </div>
   )
}

export default Inputs