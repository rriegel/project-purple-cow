import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [count, updateCount] = useState(0);

  const getCount = () => {
    axios.get('/hits')
      .then((res) => {
        updateCount(res.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      <div>
        Purple Cow Project
      </div>
      <button>
        Hit me!
      </button>
    </>
  )

};

export default App;