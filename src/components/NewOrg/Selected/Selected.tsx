import {ICompany} from "../../../App"
import React, {FC} from "react";

import "./Selected.scss"

interface IProps {
    selectedCompany: ICompany,
    setCompanies: React.Dispatch<React.SetStateAction<ICompany[]>>,
    companies: ICompany[],
}

const check = (company: ICompany, companies: ICompany[]) => {
    return companies.filter(item => {
        return company.id === item.id
    }).length > 0;
}
export const Selected: FC<IProps> = ({selectedCompany, setCompanies, companies}) => {
    return (
        <div className={"selected"}>
            <h2 className={"selected_name"}>{selectedCompany.name}</h2>

            <div className={"selected_info"}>
                <div className={"common"}>
                    <div className={"common_address"}>
                        <p className={"title"}>Юридический адрес</p>
                        <p className={"value"}>{selectedCompany.address.value}</p>
                    </div>
                    <div className={"common_manager"}>
                        <p className={"title"}>{selectedCompany.head?.post ? selectedCompany.head?.post : "Должность отсутствует"}</p>
                        <p className={"value"}>{selectedCompany.head?.name ? selectedCompany.head?.name : "Глава отсутствует"}</p>
                    </div>
                </div>
                <div className="legal">
                    <p className={"legal_inn"}>ИНН <span>{selectedCompany.inn}</span></p>
                    <p className={"legal_kpp"}>КПП <span>{selectedCompany.kpp}</span>
                    </p>
                    <p className={"legal_ogrn"}>ОГРН <span>{selectedCompany.ogrn}</span></p>
                </div>
            </div>
            {
                check(selectedCompany, companies) ?
                    <div className={"selected_saved"}><span/>Сохранено</div> :
                    <button className={"selected_save"} onClick={() => {
                        setCompanies([...companies, selectedCompany])
                    }}>Сохранить</button>
            }

        </div>
    )
}