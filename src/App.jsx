import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import Layout from './Components/Layout/Layout';
import NodesDashboard from './Components/NodesDashboard/NodesDashboard';
import PodDashboard from './Components/PodDashboard/PodDashboard';
// import { useEffect } from 'react';
// import { prettyPrintJson } from 'pretty-print-json';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NodesDashboard />} />
            <Route path='/pod-dashboard' element={<PodDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};


// const App = () => {
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