import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const getCatFact = async () => {
    setLoading(true);
    setFact(''); // clear previous fact
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) throw new Error('Failed to fetch fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Error fetching fact. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h1>Random Cat Fact</h1>
      <button onClick={getCatFact} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Cat Fact
      </button>
      <div style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
        {loading ? 'Loading...' : fact}
      </div>
    </div>
  );
}

export default App;
