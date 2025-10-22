import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import theme from './theme.js';
import { LanguageProvider } from './LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
