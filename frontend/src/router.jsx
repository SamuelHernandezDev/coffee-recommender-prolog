// router.jsx
import { createBrowserRouter } from 'react-router-dom';

// Layout
import App from './App';

// Páginas
import Home from './pages/Home';
import Menu from './pages/Menu';
import Assistant from './pages/Assistant';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'assistant', element: <Assistant /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
