import { useState, useEffect } from 'react';
import Input from './components/Input';
import Result from './components/Result';

function App() {
  const [tag, setTag] = useState('');
  const [results, setResults] = useState([]);
  const getResults = async (e) => {
    const url = `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=${tag}&image_type=photo&per_page=30`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.hits);
    console.log(data.totalHits);
    setResults(data.hits);
  };
  const submit = (e) => {
    e.preventDefault();
    getResults();
  };
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=${tag}&image_type=photo&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.hits));
  }, []);

  return (
    <div className='container mx-auto'>
      <Input tag={tag} setTag={setTag} submit={submit} />
      <div className='grid sm:grid-cols-3 gap-4 grid-cols-1'>
        {results.map((result) => (
          <Result
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
    </div>
  );
}

export default App;
