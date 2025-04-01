import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider as FlowbiteThemeProvider } from 'flowbite-react';

function App() {
  return (
    <BrowserRouter>
      <FlowbiteThemeProvider>
        <AuthProvider>
          <RoutesConfig />
        </AuthProvider>
      </FlowbiteThemeProvider>
    </BrowserRouter>
  );
}

export default App;
