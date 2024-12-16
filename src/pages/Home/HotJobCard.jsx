import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <div className="flex gap-2">
                <figure>
                    <img
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className="card-title">{company}</h2>
                    <p className="flex"><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="flex flex-wrap">
                    {
                        requirements?.map((skill, index) => <span key={index} className="border rounded-xl mx-2 px-2">{skill}</span>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <p>Salary Range: { salaryRange?.min } - { salaryRange?.max } { salaryRange?.currency } </p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;