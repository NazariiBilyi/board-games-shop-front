import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import {Box, StyledEngineProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StyledEngineProvider injectFirst>
          <Box className='background'>
              <App />
          </Box>
      </StyledEngineProvider>
  </BrowserRouter>,
)
