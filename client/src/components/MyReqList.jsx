import {MyRequestCard} from './MyRequestCard'

export const MyRequestList = ({requests}) => {
    console.log(requests)
    if(requests ){
        return(
            <>
                {Object.keys(requests).map(key => {
                    return(
                        <>
                            <MyRequestCard key={requests[key].id} requestInfo={requests[key]} />
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