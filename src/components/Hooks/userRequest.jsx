import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const userRequest = () => {
    const axiosSecure = useAxiosSecure()
    const {data: requests = []} = useQuery({
        queryKey: ['requests'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/userRequest')
            return res.data
        }
    })
    return {requests}
};

export default userRequest;