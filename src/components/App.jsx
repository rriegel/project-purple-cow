import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [count, updateCount] = useState(0);

  const getCount = () => {
    axios.get('/hits')
      .then((res) => {
        updateCount(res.data.value);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  const handleClick = () => {
    getCount();
    console.log(count);
  }
  return (
    <>
      <div className="content">
        <div className="title">
          Purple Cow Project
        </div>
        <div className="count">
          {count ? `Hits: ${count}` : 'Click the button!'}
        </div>
        <div>
          <button onClick={ () => {handleClick()} }>
            Click Here
          </button>
        </div>
        <span>
          By: Ryan Riegel
        </span>
      </div>
    </>
  )

};

export default App;