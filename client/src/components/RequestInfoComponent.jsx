import {TypeToTitle} from './TypeToTitle'
import {StatusIconComponent} from './StatusIconComponent'
import { Card } from 'bootstrap-4-react'; 

export const RequestInfoComponent = ({info}) => {
    if(info){
        return(
            <>
                <h3>Заявление на <TypeToTitle type={info.type}/></h3>
            </>
        )
    }
    return(
        <>
                <h3>Нет информации по заявлению</h3>
        </>
    )
}