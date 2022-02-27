import React from 'react';

const Input = ({ setTag, tag }) => {
  const submit = async () => {
    const url = `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=yellow+flowers&image_type=photo`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }
  return (
    <div className='flex justify-center items center'>
      <form className='flex justify-center items-center border-slate-100 border-2  max-w-sm rounded' onSubmit={submit}>
        <input
          type='text'
          name=''
          id=''
          className='border-none outline-none appearance-none w-full p-2 rounded'
          placeholder='Enter tag'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button type='submit' className='bg-teal-400 text-white p-2 rounded'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Input;
