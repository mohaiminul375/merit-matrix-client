import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdminOrMod, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/adminOrMod/${user.email}`);
    //   console.log("use admin", data);
      return data?.isAdminOrMod;
    },
    queryKey: ["isAdmin", user?.email],
  });
  return { isAdminOrMod };
};

export default useAdmin;
