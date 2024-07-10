import React, { useState } from 'react';
import { useEffect } from 'react';
import { prettyPrintJson } from 'pretty-print-json';

const App = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/getPods', { method: 'GET' })
      .then((res) => {
        // console.log(res);
        res.json().then((json) => {
          console.log(json);
          // setInfo(prettyPrintJson.toHtml(json, { indent: 2 }));
          setInfo(JSON.stringify(json, null, 2));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [info]);
  return (
    <div>
      <p>{info}</p>
    </div>
  );
};

export default App;
