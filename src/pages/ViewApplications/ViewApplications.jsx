import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your applicaton status updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl">Applicatons for this job: {applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Eamil</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) =>
                                <tr key={application._id}>
                                    <th>{index + 1}</th>
                                    <td>{application.aplicant_email}</td>
                                    <td></td>
                                    <td>
                                        <select
                                            defaultValue={application.status || "Change Status"}
                                            onChange={(e) => handleStatusUpdate(e, application._id)}
                                            className="select select-bordered select-xs w-full max-w-xs">
                                            <option disabled >Change Status</option>
                                            <option>Under Review</option>
                                            <option>Set Interview</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;