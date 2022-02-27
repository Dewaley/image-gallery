import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [tag,setTag] = useState('')
  return (
    <div>
      <Input tag = {tag} setTag={setTag}/>
    </div>
  );
}

export default App;
