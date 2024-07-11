import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Provider/UserProvider";

const PrivateRouter = ({ children }) => {
  const { loggedInUser, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-40">
        Loading.....
      </div>
    );
  }

  if (loggedInUser) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRouter;
