import {FC} from "react";
import {ICompany} from "../../../App"


interface IProps {
    suggestion: ICompany,
    select: (id: string) => void
}

export const IndividualSuggestion: FC<IProps> = ({suggestion, select}) => {
    return (
        <div className={"suggestion"} onClick={() => select(suggestion.id)}>
            <h2 className={"suggestion_name"}>{suggestion.name}</h2>
            <div className={"suggestion_info"}>
                <p className={"inn"}>{suggestion.inn}</p>
                <p className={"city"}>{suggestion.address.city}</p>
            </div>
        </div>
    )
}