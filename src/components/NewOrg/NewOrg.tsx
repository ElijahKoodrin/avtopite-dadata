import "./NewOrg.scss";

import React, {useState, FC, useMemo, useEffect, useCallback} from "react";

import {Empty} from "./Empty/Empty";
import {Suggestions} from "./Suggestion/Suggestions";
import {Selected} from "./Selected/Selected";

import {ICompany} from "../../App";
import {useDebounce} from "../../hooks/useDebounce";
import {fetchData} from "../../utils/apiRequest";


export enum EInputStatus {
    empty,
    editing,
    selected
}

interface IProps {
    setCompanies: React.Dispatch<React.SetStateAction<ICompany[]>>,
    companies: ICompany[]
}

const initialSelected = {
    address: {city: "", value: ""},
    head: {},
    id: "",
    inn: "",
    kpp: "",
    name: "",
    ogrn: ""
}

export const NewOrg: FC<IProps> = ({setCompanies, companies}) => {

    const [input, setInput] = useState<string>("");

    const [inputStatus, setInputStatus] = useState<EInputStatus>(0);

    const [suggestions, setSuggestions] = useState<ICompany[]>([]);

    const [selectedCompany, setSelectedCompany] = useState<ICompany>(initialSelected);


    const inputDebounced = useDebounce(input, 300);
    useEffect(() => {
        fetchData(inputDebounced)
            .then(data => {
                setSuggestions(data);
            });
    }, [inputDebounced]);

    useMemo(() => {
        if (inputDebounced === "") {
            setInputStatus(0);
        } else setInputStatus(1);
    }, [inputDebounced]);


    const select = useCallback((id: string) => {
            const filtered = suggestions.filter(item =>
                item.id === id
            )[0];
            setInputStatus(2);
            setSelectedCompany(filtered);
        },
        [suggestions],
    );


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };


    return (
        <div className={"new-org"}>
            <p className={"new-org_title"}>Организация или ИП</p>
            <input
                type="text"
                placeholder={"Введите название, ИНН или адрес организации"}
                className={"new-org_input"}
                onChange={handleChange}/>
            {
                inputStatus === 0 ?
                    <Empty/>
                    : inputStatus === 1 ?
                        <Suggestions suggestions={suggestions} select={select}/>
                        : inputStatus === 2 ?
                            <Selected selectedCompany={selectedCompany} setCompanies={setCompanies}
                                      companies={companies}/> : <></>
            }
        </div>
    );
};