import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './pages/AppRoutes';
import { NextUIProvider } from '@nextui-org/react';

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
      <NextUIProvider>
        <RouterProvider router={router}></RouterProvider>
      </NextUIProvider>
    </>
  );
}

export default App;
