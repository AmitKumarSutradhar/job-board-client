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
        <div>
            {
                jobs.map( job => <HotJobCar key={job._id} job={job}></HotJobCar>)
            }
        </div>
    );
};

export default HotJobs;