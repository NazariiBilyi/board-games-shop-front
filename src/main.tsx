import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import {StyledEngineProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StyledEngineProvider injectFirst>
          <App />
      </StyledEngineProvider>
  </BrowserRouter>,
)
