// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get div#root element to render the app
const root = document.getElementById('root');

// Render the app
if (root !== null) {
  const appRoot = ReactDOM.createRoot(root);
  appRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}