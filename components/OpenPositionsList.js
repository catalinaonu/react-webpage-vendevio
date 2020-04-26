import OpenPosition from "./OpenPosition";
import openJobs from "./Data/open_positions";

const keys = Object.keys(openJobs);

const OpenPositionsList = () => (
    <div>
        {keys.map(key =>
            <div>
                <OpenPosition key={key} job={openJobs[key]}/>
            </div>
        )}
    </div>
)

export default OpenPositionsList

