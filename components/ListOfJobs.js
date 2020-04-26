import Link from 'next/link';
import openJobs from "./Data/open_positions";

const keys = Object.keys(openJobs)

// list with all the jobs + link to a specific job
const ListOfJobs = () => (
    <div>
        {keys.map(key => (
            <div key={key}>
                <div>{openJobs[key].position} </div>
                <div>{openJobs[key].department}</div>
                {/*link to a specific job*/}
                <Link href="/jobs/[position]" as={`/jobs/${key}`}>
                    <a> see details </a>
                </Link>
            </div>
        ))}
    </div>
)


export default ListOfJobs