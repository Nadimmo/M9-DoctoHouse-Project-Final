import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data: isAdmin ,isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email,"isAdmin"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            return res.data?.admin
        }
    })


    return {isAdmin , isAdminLoading}
};

export default useAdmin;