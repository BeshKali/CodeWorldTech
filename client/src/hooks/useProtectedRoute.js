import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function useProtectedRoute(requiredRole = null) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) navigate("/login");
      else if (requiredRole && user.role !== requiredRole) {
        alert("Unauthorized");
        navigate("/");
      }
    }
  }, [user, loading]);
}
