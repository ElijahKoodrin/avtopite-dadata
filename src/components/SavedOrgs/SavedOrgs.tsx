import React, {FC} from "react";
import {ICompany} from "../../App";
import {IndividualOrg} from "./IndividualOrg";
import "./SavedOrgs.scss"

interface IProps {
    companies: ICompany[],
    setCompanies: React.Dispatch<React.SetStateAction<IProps["companies"]>>
}

export const SavedOrgs: FC<IProps> = ({companies, setCompanies}) => {
    return (
        <ul className={"saved-orgs"}>
            {companies.map((item) =>
                <IndividualOrg company={item} companies={companies} setCompanies={setCompanies} key={item.id}/>
            )}
        </ul>
    )
}