import {MyRequestCard} from './MyRequestCard'

export const MyRequestList = ({requests}) => {
    console.log(requests)
    if(typeof requests === Array ){
        return(
            <>
                {requests.map(request => {
                    return(
                        <>
                            <MyRequestCard key={request.title} info={request} />
                        </>
                    )
                })}
            </>
        )
    }
    else{
        return(
            <>
                <h3><MyRequestCard key={requests.id} requestInfo={requests} /></h3>
            </>
        )
        
        
        
    }
}