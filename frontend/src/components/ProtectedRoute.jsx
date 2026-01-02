import { Navigate } from "react-router-dom";
import { useUserAnswers } from "../context/UserAnswersContext";

export default function ProtectedRoute({ children }) {
  const { level } = useUserAnswers();

  // Si NO ha elegido nivel, redirige a Home
  if (!level) {
    return <Navigate to="/" replace />;
  }

  return children;
}
