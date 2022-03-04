import { useState, useEffect } from 'react';
import './App.css'
import Input from './components/Input';
import Result from './components/Result';
import ReactPaginate from 'react-paginate';

function App() {
  const [tag, setTag] = useState('');
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getResults = async (e) => {
    setIsLoading(true);
    const url = `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=${tag}&image_type=photo&per_page=30`;
    const res = await fetch(url);
    const data = await res.json();
    setResults(data.hits);
    const total_count = Math.ceil(data.totalHits / 30);
    setPageCount(total_count);
    setIsLoading(false);
  };
  const submit = (e) => {
    e.preventDefault();
    getResults();
  };
  const handlePageClick = (data) => {
    setIsLoading(true);
    const url = `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=${tag}&image_type=photo&per_page=30&page=${
      data.selected + 1
    }`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.hits);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    const url = `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=${tag}&image_type=photo&per_page=30`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.hits);
        const total_count = Math.ceil(data.totalHits / 30);
        setPageCount(total_count);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='container mx-auto'>
      <Input tag={tag} setTag={setTag} submit={submit} />
      {pageCount > 1 && results !== [] && (
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          containerClassName={'flex justify-center items-center m-3'}
          pageClassName={
            'h-6 w-6 border-2 border-r-black border-t-black border-b-black border-l-0 flex justify-center items-center'
          }
          pageLinkClassName={'pager-link'}
          previousClassName={
            'h-6 w-6 border-2 border-black flex justify-center items-center'
          }
          previousLinkClassName={'pager-link'}
          nextClassName={
            'h-6 w-6 border-2 border-r-black border-t-black border-b-black border-l-0 flex justify-center items-center'
          }
          nextLinkClassName={'pager-link'}
          breakClassName={
            'h-6 w-6 border-2 border-r-black border-t-black border-b-black border-l-0 flex justify-center items-center'
          }
          breakLinkClassName={'pager-link'}
        />
      )}
      {isLoading === true ? (
        <div className='loader flex justify-center items-center'>
          <div className='bg-white p-5 rounded-full flex space-x-3'>
            <div className='w-5 h-5 bg-gray-800 rounded-full animate-bounce'></div>
            <div className='w-5 h-5 bg-gray-800 rounded-full animate-bounce'></div>
            <div className='w-5 h-5 bg-gray-800 rounded-full animate-bounce'></div>
          </div>
        </div>
      ) : (
        <div>
          {results.length === 0 ? (
            <div className='text-xl flex justify-center'>No Items Found</div>
          ) : (
            <div className='grid sm:grid-cols-3 gap-4 grid-cols-1'>
              {results.map((result) => (
                <Result
                  setTag={setTag}
                  searchTag={getResults}
                  key={result.id}
                  views={result.views}
                  downloads={result.downloads}
                  likes={result.likes}
                  tags={result.tags}
                  user={result.user}
                  image={result.webformatURL}
                  largeImage={result.largeImageURL}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
