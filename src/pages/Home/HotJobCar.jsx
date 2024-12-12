import { FaMapMarkerAlt } from "react-icons/fa";


const HotJobCar = ({ job }) => {
    const { title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
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
                        requirements.map(skill => <span className="border rounded-xl mx-2 px-2">{skill}</span>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <p>Salary Range: { salaryRange.min } - { salaryRange.max } { salaryRange.currency } </p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCar;