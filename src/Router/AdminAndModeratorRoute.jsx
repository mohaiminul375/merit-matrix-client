import { RingLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminAndModeratorRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { isAdminOrMod, isLoading } = useAdmin();
  const adminAndModerator =
    isAdminOrMod === "Admin" || isAdminOrMod === "Moderator";
  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  if (user && adminAndModerator) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminAndModeratorRoute;
