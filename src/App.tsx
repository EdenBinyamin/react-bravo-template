import Navigation from 'navigations/Navigation';
import { initAxios } from 'networkManager';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    initAxios();
  }, []);
  return <Navigation />;
}

export default App;
