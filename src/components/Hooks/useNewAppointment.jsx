import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';

const useNewAppointment = () => {
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {refetch,data: newAppointments = []} = useQuery({
        queryKey: ["newAppointments ",user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/Newappointments?email=${user?.email}`)
            return res.data
        }
    })
    return {newAppointments, refetch}
};

export default useNewAppointment;