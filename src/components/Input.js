import React from 'react'

const Input = () => {
  return (
   <div className="flex justify-center items center">
    <form className='flex justify-center items-center border-slate-100 border-2  max-w-sm rounded'>
     <input type="text" name="" id="" className='border-none outline-none appearance-none w-full p-2 rounded' placeholder='Enter tag'/>
     <button type="submit" className='bg-teal-400 text-white p-2 rounded'>Search</button>
    </form>
   </div>
    
  )
}

export default Input