import React, {useState} from "react";
import "./App.scss";
import {NewOrg} from "./components/NewOrg/NewOrg";
import {SavedOrgs} from "./components/SavedOrgs/SavedOrgs";

enum EAddingOrSaved {
    adding,
    saved
}

export interface ICompany {
    name: string,
    address: {
        city: string,
        value: string
    }
    head?: {
        name?: string,
        post?: string
    },
    inn: string,
    ogrn: string,
    kpp?: string,
    id: string
}

function App() {

    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [addingOrSaved, setAddingOrSaved] = useState<EAddingOrSaved>(0);
    return (
        <div className="App">
            <header className="header"/>

            <div className="form">
                <h1 className={"form_header"}>Мои организации</h1>
                <ul className={"form_tabs"}>
                    <li className={addingOrSaved === 0 ? "tab_item active" : "tab_item"}
                        onClick={() => setAddingOrSaved(0)}>
                        Новая организация
                    </li>
                    <li className={addingOrSaved === 1 ? "tab_item active" : "tab_item"}
                        onClick={() => {
                            if (companies.length > 0) {
                                setAddingOrSaved(1)
                            }
                        }}>
                        Сохранённые организации <span>({companies.length})</span>
                    </li>
                </ul>
                <div className={"form_body"}>
                    {
                        addingOrSaved === 0 ?
                            <NewOrg companies={companies} setCompanies={setCompanies}/> :
                            <SavedOrgs companies={companies} setCompanies={setCompanies}/>
                    }

                </div>
            </div>
        </div>

    );
}

export default App;
