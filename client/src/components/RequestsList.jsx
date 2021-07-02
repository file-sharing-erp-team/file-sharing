import {RequestCard} from './RequestCard'

export const RequestsList = ({requests}) => {
    if(requests.length === 0 ){
        return(
            <>
                <h3>Нет доступных услуг</h3>
            </>
        )
    }
    else{
        return(
            <>
                {requests.map(request => {
                    return(
                        <>
                            <RequestCard key={request.title} info={request} />
                        </>
                    )
                })}
            </>
        )
    }
}