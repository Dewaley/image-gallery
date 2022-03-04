import React from 'react';

const Result = ({ views, downloads, user, likes, image, tags,largeImage }) => {
  const tag = tags.split(',');
  return (
    <div className=''>
      <img src={image} alt='' className='w-full' />
      <div className='ml-4 mt-2'>
        <div className='font-bold text-orange-500'>Photo by {user}</div>
        <div>
          <span className='font-bold'>Views : </span>
          {views}
        </div>
        <div>
          <span className='font-bold'>Downloads : </span>
          {downloads}
        </div>
        <div>
          <span className='font-bold'>Likes : </span>
          {likes}
        </div>
        <div>
          {tag.map((hashtag, index) => (
            <span key={index} className='bg-slate-400 rounded-md mr-1.5 px-1 py-0.5'>#{hashtag}</span>
          ))}
        </div>
        <div className='underline'>
          <a href={largeImage}>Click to get larger image</a>
          
        </div>
      </div>
    </div>
  );
};

export default Result;
