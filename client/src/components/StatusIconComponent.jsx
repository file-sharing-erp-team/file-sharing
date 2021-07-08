import {LoadingComponent} from './LoadingComponent'
import {Spinner} from 'react-bootstrap'

export const StatusIconComponent = ({status}) => {
    //<i class="fas fa-spinner" alter="В обработке"></i>
    if(status === 1){
        return (
            <>
                <Spinner className="mx-auto my-auto" animation="border" variant="" style={{width:"15px", height:"15px"}} />
            </>
        )
    }
    return(
        <>
             <Spinner className="mx-auto my-auto" animation="border" variant="" style={{width:"15px", height:"15px"}} />
        </>
    )
}