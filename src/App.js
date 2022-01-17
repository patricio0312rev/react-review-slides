import React from 'react';
import Review from './components/review/review.component';


function App() {
  return (
    <main className="App">
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>

        <Review />
      </section>
    </main>
  );
}

export default App;
