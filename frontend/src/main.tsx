import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {AuthProvider} from "react-oidc-context";

const oidcConfig = {
  authority: "http://localhost:8080/realms/development",
  client_id: "frontend",
  scope: "openid profile email offline_access",
  redirect_uri: window.location.origin + "/authentication/callback",
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AuthProvider {...oidcConfig}>
        <App/>
      </AuthProvider>
    </StrictMode>,
)
