import {LoadingComponent} from './LoadingComponent'
import {Spinner} from 'react-bootstrap'
import BlockIcon from '@material-ui/icons/Block';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';

export const StatusIconComponent = ({status}) => {
    //<i class="fas fa-spinner" alter="В обработке"></i>
    if(status === 1){
        return (
            <>
                <Spinner className="mx-auto my-auto" animation="border" variant="" style={{width:"18px", height:"18px"}} />
            </>
        )
    }
    if(status === 0){
        return (
            <>
                <BlockIcon color="secondary" fontSize="small" />
            </>
        )
    }
    if(status === 2){
        return (
            <>
                <AccessTimeIcon style={{color: "green"}} fontSize="small"/>
            </>
        )
    }
    if(status === 3){
        return (
            <>
                <DoneIcon style={{color: "green"}} fontSize="small"/>
            </>
        )
    }
    return(
        <>
             <Spinner className="mx-auto my-auto" animation="border" variant="" style={{width:"15px", height:"15px"}} />
        </>
    )
}