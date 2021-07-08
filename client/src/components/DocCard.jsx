import {Card} from 'react-bootstrap'
export const DocCard = ({docInfo}) => {
    return(
        <Card style={{marginTop: "10px"}}>
            <Card.Title><a href={docInfo.src}>{docInfo.file_name}</a></Card.Title>
        </Card>
    )
}