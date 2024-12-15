import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const{ user } = useAuth();

    console.log(user);

    const submitJobApplication = (e) => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            aplicant_email: user.email,
            linkedin,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your applicaton has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

        // console.log(linkedin, github, resume);
        console.log(jobApplication);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-1/2 mx-auto shrink-0 shadow-2xl">
                    <form onSubmit={submitJobApplication} className="card-body">
                    <h1 className="text-5xl font-bold">Apply job and good luck!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linkedin URL</span>
                            </label>
                            <input type="url" name='linkedin' placeholder="Linkedin URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GitHub URL</span>
                            </label>
                            <input type="url" name='github' placeholder="GitHub URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply Now</button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default JobApply;