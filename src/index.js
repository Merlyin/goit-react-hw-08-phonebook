import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
  <React.StrictMode>
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      
        <App />
        
      </PersistGate>
    </Provider>
  
  </React.StrictMode>
);