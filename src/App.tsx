import { HashRouter } from 'react-router-dom';
import AppRoutes from './pages/AppRoutes';
import { useEffect } from 'react';

function App() {
  // Efecto para que aplique darkmode por defecto
  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) {
      return;
    }
    html.classList.add('dark');
  }, []);

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
