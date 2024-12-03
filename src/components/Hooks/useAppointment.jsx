import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAppointment = () => {
    const axiosPublic = useAxiosPublic()
    const {data: appointments = []} = useQuery({
        queryKey: "appointments",
        queryFn: async()=>{
            const res = await axiosPublic.get('/appointments')
            return res.data
        }
    })
    return {appointments}
};

export default useAppointment;