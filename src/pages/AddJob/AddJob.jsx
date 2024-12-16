import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());

        const { min, max, currency, ...newJob } = initialData;

        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split("\n");
        newJob.responsibilites = newJob.responsibilites.split("\n");
        // console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                'content-type': 'applicaiton/json'
            },
            body: JSON.stringify(newJob),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications');
                }
            })

    }
    return (
        <div>
            <div className="text-3xl">Post a new job</div>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
                </div>

                <div className="flex justify-between">
                    {/* Job Type  */}
                    <div className="form-control flex-1 mr-3">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select defaultValue={"Pick a job type"} className="select select-bordered w-full">
                            <option disabled>Pick a job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                    {/* Job Categorye  */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select defaultValue={"Pick a job category"} className="select select-bordered w-full">
                            <option disabled>Pick a job category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Finance</option>
                        </select>
                    </div>
                </div>

                {/* Salary Range  */}
                <div className="grid grid-cols-1 xl:grid-cols-3 items-end gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <select name='currency' defaultValue={"Currency"} className="select select-bordered w-full">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>EURO</option>
                        </select>
                    </div>
                </div>

                {/* Job Description  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Descirption</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered" placeholder="Job Descirption"></textarea>
                </div>

                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='location' placeholder="Company Name" className="input input-bordered" required />
                </div>

                {/* Job Requirements  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea name='requirements' className="textarea textarea-bordered" placeholder="Each Requriemnet in a new line"></textarea>
                </div>

                {/* Job Responsibility  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilites</span>
                    </label>
                    <textarea name='responsibilites' className="textarea textarea-bordered" placeholder="Write each responsibility in a new line"></textarea>
                </div>

                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                </div>

                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" name='hr_email' defaultValue={user?.email} className="input input-bordered" required />
                </div>

                {/* Company Logo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
                </div>


                {/* Submit Button  */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;