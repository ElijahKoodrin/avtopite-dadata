import "./Empty.scss"

export const Empty = () => {
    return (
        <div className={"empty"}>
            <div className="empty_icon"/>
            <p className="empty_instructions">Для добавления новой организации введите ее название, ИНН или адрес.</p>
        </div>
    )
}