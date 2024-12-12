import { useEffect } from "react";
import { useState } from "react";
import HotJobCar from "./HotJobCar";


const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
            console.log(data);
        })
    }, []);
    return (
        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                jobs.map( job => <HotJobCar key={job._id} job={job}></HotJobCar>)
            }
        </div>
    );
};

export default HotJobs;