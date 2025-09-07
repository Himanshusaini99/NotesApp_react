import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import  store  from "./redux/store.js"
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div>
    <App/>
    <Toaster position='top-right'/>
    </div>
    </Provider>
  </StrictMode>
);
