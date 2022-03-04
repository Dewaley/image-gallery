import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [tag,setTag] = useState('')
  const [result,setResult] = useState([])
  const submit = async (e) => {
    e.preventDefault();
    const url = `https://pixabay.com/api/?key=25912123-f6cf2c45649c1add9c51bacc6&q=${tag}&image_type=photo`;
    const res = await fetch(url);
    const data = await res.json();
    setResult(data)
  };
  return (
    <div>
      <Input tag = {tag} setTag={setTag} submit={submit}/>
    </div>
  );
}

export default App;
