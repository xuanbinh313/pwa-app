import { useEffect, useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    window.addEventListener('online', () => {
      toast("Online now, hoooo!")
    })
    window.addEventListener('offline', () => {
      toast("Problem about your network, we will working in offline mode")
    })
    if (!window.navigator.onLine) {
      toast("Problem about your network, we will working in offline mode")
    }
    async function fetchData() {
      const data = await fetchWeather()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      {data?.results?.map(item => (
        <div key={item.name}>
          <img style={{ height: 300, width: 300 }} alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} />
          <p>{item.name}</p>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default App;
