import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import Layout from './Components/Layout/Layout';
// import NodesDashboard from './Components/NodesDashboard/NodesDashboard';

import PodContentsDashboard from './Components/PodContentsDashboard/PodContentsDashboard';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/SignupPage/SignupPage';
import SelectNamespaceDashboard from './Components/SelectNamespaceDashboard/SelectNamespaceDashboard';
import SelectPodDashboard from './Components/SelectPodDashboard/SelectPodDashboard';
// import { useEffect } from 'react';
// import { prettyPrintJson } from 'pretty-print-json';
export default function App() {
  
  return (
    <div className='app'>
      <Router>
        <Routes>
          {/* Layout component includes the Header and Footer components which will wrap every page  */}
          <Route path='/' element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path='/CreateUser' index element={<SignupPage />} />
            {/* <Route path='/Nodes' index element={<NodesDashboard />} /> */}
            <Route
              path='/Namespaces'
              index
              element={<SelectNamespaceDashboard />}
            />
            {/*The index attribute indicates this component should render in the root path*/}
            <Route
              path='/select-pod-dashboard'
              element={<SelectPodDashboard />}
            />
            <Route
              path='/pod-contents-dashboard'
              element={<PodContentsDashboard  />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

{
  /* // const App = () => { */
}
{
  /* // const [info, setInfo] = useState('');

// useEffect(() => { */
}
{
  /* //   fetch('http://localhost:3000/getPods', { method: 'GET' })
//     .then((res) => { */
}
{
  /* //       // console.log(res);
//       res.json().then((json) => { */
}
{
  /* //         console.log(json);
//         // setInfo(prettyPrintJson.toHtml(json, { indent: 2 }));
//         setInfo(JSON.stringify(json, null, 2));
//       });
//     })
//     .catch((err) => { */
}
{
  /* //       console.log(err);
//     });
// }, [info]);
//}; */
}
