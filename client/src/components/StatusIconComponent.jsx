export const StatusIconComponent = ({status}) => {
    if(status === 1){
        return (
            <>
                Статус: <i class="fas fa-spinner" alter="В обработке"></i>
            </>
        )
    }
    return(
        <>
            Статус: <i class="fas fa-spinner" alter="В обработке"></i>
        </>
    )
}