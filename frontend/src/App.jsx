//frontend\src\App.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
