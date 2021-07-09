import {RequestCard} from './RequestCard'

export const RequestsList = ({requests}) => {
    console.log(requests.length)
   
    return(
        <>
            {Object.keys(requests).map(key =>{
                return(
                    <RequestCard info={requests[key]}/>
                )
            })}
        </>
    )
}