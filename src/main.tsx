import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
/* import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID; */
console.log(window.location.origin)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/*   <Auth0Provider domain={domain} clientId={clientId}> */}
    <App />
   {/*  </Auth0Provider> */}
  </React.StrictMode>,
)

