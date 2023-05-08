import {FC} from "react";

import {ICompany} from "../../../App"
import {IndividualSuggestion} from "./IndividualSuggestion";

import "./Suggestion.scss"


interface IProps {
    suggestions: ICompany[],
    select: (id: string) => void
}

export const Suggestions: FC<IProps> = ({suggestions, select}) => {
    return (
        <ul className={"suggestions"}>
            {
                suggestions.map((suggestion) => (
                    <IndividualSuggestion key={suggestion.id} suggestion={suggestion} select={select}/>
                ))
            }
        </ul>
    )
}