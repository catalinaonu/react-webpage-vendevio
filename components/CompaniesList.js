import Company from "./Company";
import companies from "./Data/companies_info";

const keys = Object.keys(companies)

const CompaniesList = () => (
    <div>
        {keys.map(key =>
            <Company key={key} company={companies[key]}/>
        )}
    </div>
)

export default CompaniesList

