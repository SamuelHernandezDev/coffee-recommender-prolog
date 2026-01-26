// router.jsx
import { createBrowserRouter } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Assistant from "./pages/Assistant";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/common/ProtectedRoute";

// Layout
import Navbar from "./components/layout/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },

  {
    path: "/menu",
    element: (
      <AppLayout>
        <Menu />
      </AppLayout>
    ),
  },

  {
    path: "/assistant",
    element: (
      <AppLayout>
        <ProtectedRoute>
          <Assistant />
        </ProtectedRoute>
      </AppLayout>
    ),
  },

  {
    path: "*",
    element: (
      <AppLayout>
        <NotFound />
      </AppLayout>
    ),
  },
]);
