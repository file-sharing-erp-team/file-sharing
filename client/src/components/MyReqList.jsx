import {MyRequestCard} from './MyRequestCard'

export const MyRequestList = ({requests}) => {
    console.log(requests)
    if(requests ){
        return(
            <>
                <div style={{marginTop:'2%'}}>
                    <h4 className="ms-3">Мои заявления</h4>
                    <div className="row" style={{paddingTop: 0, marginTop: 0, width: '100%'}}>
                        {Object.keys(requests).map(key => {
                            return(
                                <>
                                
                                    <MyRequestCard key={requests[key].id} requestInfo={requests[key]} />
                                </>
                            )
                        })}
                    </div>
                </div>
                
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