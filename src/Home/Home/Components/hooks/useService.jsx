import { useQuery } from "@tanstack/react-query";

const useService =()=>{
    const {data: services = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['services'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/services');
            return res.json();
        }
    })

    return [services, loading, refetch]
}
export default useService;