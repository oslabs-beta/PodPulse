import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import PodsDashboard from './Components/PodsDashboard/PodsDashboard';
import ContainersDashboard from './Components/ContainersDashboard/ContainersDashboard';
// import { useEffect } from 'react';
// import { prettyPrintJson } from 'pretty-print-json';

const App = () => {
  // const [info, setInfo] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:3000/getPods', { method: 'GET' })
  //     .then((res) => {
  //       // console.log(res);
  //       res.json().then((json) => {
  //         console.log(json);
  //         // setInfo(prettyPrintJson.toHtml(json, { indent: 2 }));
  //         setInfo(JSON.stringify(json, null, 2));
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [info]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<PodsDashboard />} />
          <Route path='containers' element={<ContainersDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
