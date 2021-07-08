import {DocCard} from './DocCard'

export const DocList = ({docs}) => {
    if(docs){
        return(
            <>
            {docs.map((doc) => {
                return(
                    <DocCard />
                )
            })}
            </>
        )
    }
}