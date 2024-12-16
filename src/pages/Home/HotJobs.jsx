import { useEffect } from "react";
import { useState } from "react";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    }, []);
    return (
        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                jobs.map( (job, index) => <HotJobCard key={index} job={job}></HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;