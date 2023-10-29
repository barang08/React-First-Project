
import './App.css';
import UserDetail from './components/UserDetails';
import { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [activeUserId, setActiveUserId] = useState(null)
  return (
    <div className="App">

      <div><UserList setActiveUserId={setActiveUserId} /></div>
      <div><UserDetail activeUserId={activeUserId} /></div>

    </div >
  )
}

export default App;
