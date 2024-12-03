import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useDoctors = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: doctor = [] } = useQuery({
        queryKey: ['doctor'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/doctors')
            return res.data
        }
    })
    return {doctor,refetch}
};

export default useDoctors;