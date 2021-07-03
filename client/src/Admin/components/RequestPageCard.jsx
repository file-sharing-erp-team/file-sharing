export const RequestPageCard = ({info}) => {
    if(!info){
        return(
            <>
                <p>Нет доступной информации</p>
            </>
        )
    }
    return(
        <>
            <p>Информация по запросу {info.title}</p>
        </>
    )
}