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
      <div>
        Purple Cow Project
      </div>
      <button onClick={ () => {handleClick()} }>
        Click Here
      </button>
      <div>
        {count || 'Click the button to view Hits!'}
      </div>
    </>
  )

};

export default App;