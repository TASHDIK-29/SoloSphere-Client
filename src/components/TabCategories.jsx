import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';



const TabCategories = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async () => {

            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data);
        }

        getData();
    }, [])

    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-4xl font-bold text-center mt-12'>Browse Jobs By Categories</h1>
                <p className='text-lg text-center my-6 px-60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eum veniam alias impedit totam? Dolore sed ipsam minus voluptatum iste.</p>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Designing</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-4 my-6'>
                        {jobs
                            .filter(job => job.category === 'Web Development')
                            .map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4 my-6'>
                        {jobs
                            .filter(job => job.category === 'Graphics Designing')
                            .map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4 my-6'>
                        {jobs
                            .filter(job => job.category === 'Digital Marketing')
                            .map(job => <JobCard job={job} key={job._id}></JobCard>)
                        }
                    </div>
                </TabPanel>

                {/* <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel> */}
            </div>
        </Tabs>
    );
};

export default TabCategories;