import useService from '../../Components/hooks/useService';
import ServiceCard from '../../Components/Card/ServiceCard';
import Loader from '../../Components/Loader/Loader';

const Portfolio = () => {
    const [services,loading]= useService();
    if (loading) {
        return <Loader />}
    return (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8'>
                        {
                            services?.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>       
    );
};

export default Portfolio;