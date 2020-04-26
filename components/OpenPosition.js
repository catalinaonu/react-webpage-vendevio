const OpenPosition = ({job}) => {

    return (
        <div>
            <div>{job.position}</div>
            <div>{job.type_of_employment}</div>
            <div>{job.department}</div>
            <div>{job.starting_time}</div>
            <div>{job.location}</div>
            <div>{job.salary}</div>
            <div>{job.benefits}</div>
            <div>{job.profile}</div>
            <div>{job.responsibility}</div>
        </div>
    )
}

export default OpenPosition

