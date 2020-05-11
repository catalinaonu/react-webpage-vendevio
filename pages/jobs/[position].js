import {useRouter} from 'next/router';

//components
import OpenPosition from "../../components/OpenPosition";
import JobApplication from "../../components/JobApplyForm";

//file date
import openJobs from "../../components/Data/open_positions";



const JobDescription = () => {
    const router = useRouter();
    const {position} = router.query;
    //because getInitialProps doesn't work
    if(!position) return <p></p>

    return (
        <div>
            <OpenPosition job={openJobs[position]}/>

       </div>
    );
}


JobDescription.getInitialProps = async ({query}) => {
    return {openJobs: query.position}
}

export default JobDescription

