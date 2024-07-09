import React, { useState } from 'react';
import { useEffect } from 'react';
import { prettyPrintJson } from 'pretty-print-json';

const App = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/getPodInfo', { method: 'GET' })
      .then((res) => {
        //console.log(res);
        res.json().then((json) => {
          console.log(json);
          // setInfo(prettyPrintJson.toHtml(json, { indent: 2 }));
          setInfo(JSON.stringify(json, null, 2));
          console.log(json['ecs-test']);
          console.log(
            JSON.stringify({
              name: json['ecs-test'].name,
              resourceVersion: json['ecs-test'].resourceVersion,
            })
          );
          fetch('http://localhost:3000/setWatch', {
            method: 'POST',
            body: JSON.stringify({
              name: json['ecs-test'].name,
              resourceVersion: json['ecs-test'].resourceVersion,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            //   'Access-Control-Allow-Methods': '*',
            // },
          }).then((res) => {});
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
