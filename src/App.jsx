import { LayoutProvider } from './contexts/LayoutContext'
import { ThemeProvider as FlowbiteThemeProvider } from 'flowbite-react';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <FlowbiteThemeProvider>
      <LayoutProvider>
        <AppRoutes />
      </LayoutProvider>
    </FlowbiteThemeProvider>
  );
}

export default App;
