import Value from "./Value";
import values from "./Data/values"

const keys = Object.keys(values)

const ValuesList = () => (
    <div>
        {keys.map(key => (
            <Value key={key} value={values[key]}/>
        ))}

    </div>
)

export default ValuesList