import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Import AWS Amplify libraries.
// This is so our front-end can interact with our backend services.
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './routes/About/about'
import Colleges from './routes/Colleges/colleges'

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="colleges" element={<Colleges />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
