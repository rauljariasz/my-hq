import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './pages/AppRoutes';

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
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
