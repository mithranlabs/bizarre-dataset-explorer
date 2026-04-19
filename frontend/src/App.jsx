import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RouletteScreen from './components/RouletteScreen';
import DatasetCard from './components/DatasetCard';
import './App.css';

const API_URL = 'http://localhost:5000/api/datasets/random';

function App() {
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomDataset = async () => {
    setLoading(true);
    setError(null);
    setDataset(null);

    try {
      const response = await axios.get(API_URL);
      // Delay setting data slightly so the scramble animation plays fully
      setTimeout(() => {
        setDataset(response.data);
        setLoading(false);
      }, 1800);
    } catch (err) {
      setError('CONNECTION FAILED. IS THE BACKEND RUNNING?');
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <RouletteScreen onSpin={fetchRandomDataset} loading={loading} />
        {error && <p className="error-msg">{error}</p>}
        {dataset && <DatasetCard dataset={dataset} />}
      </main>
    </div>
  );
}

export default App;