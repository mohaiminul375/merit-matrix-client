import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>merit-matrix | Dashboard-Home</title>
      </Helmet>
      <h4 className="text-lg font-bold font-cinzel text-[#247CFF]">
        Hi, {user?.displayName}
      </h4>
      <h2 className="text-4xl">Welcome to Admin Dashboard</h2>
    </div>
  );
};

export default AdminHome;

