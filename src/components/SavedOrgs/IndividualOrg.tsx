import {ICompany} from "../../App";
import React, {FC, useState} from "react";

interface IProps {
    company: ICompany,
    companies: ICompany[]
    setCompanies: React.Dispatch<React.SetStateAction<ICompany[]>>
}

export const IndividualOrg: FC<IProps> = ({company, companies, setCompanies}) => {

    const handleDelete = () => {
        setCompanies([...companies.filter((item) => {
            return item.id !== company.id
        })])
    }

    const [showMore, setShowMore] = useState<boolean>(false);
    return (
        <li className={"individual-org"}>
            <div className={"info"}>
                <h2 className={"info_title"}>{company.name}</h2>
                <div className={"info_legal"}>
                    <p>ИНН <span>{company.inn}</span></p>
                    {showMore &&
                        <>
                            <p>КПП <span>{company.kpp}</span></p>
                            <p>ОГРН <span>{company.ogrn}</span></p>
                            <p>Юридический адрес <span>{company.address.value}</span></p>
                            <p>{company.head?.post}<span>{company.head?.name}</span></p>
                        </>}
                </div>
            </div>
            <div className={"controls"}>
                <button className="controls_delete" onClick={handleDelete}/>
                <p className={showMore ? "controls_show-more active" : "controls_show-more"}
                   onClick={() => setShowMore(!showMore)}>{showMore ? "скрыть подробности" : "подробнее"}<span/></p>

            </div>

        </li>
    )
}