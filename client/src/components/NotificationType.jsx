import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';

export const NotificationType = ({type}) => {
    if(type === 1){
        return(
            <>
                <InsertDriveFileOutlinedIcon style={{marginTop:'-5px'}} fontSize="small"  />
            </>
        )
    }

    if(type === 2){
        return(
            <>
                <QuestionAnswerOutlinedIcon style={{marginTop:'-5px'}} fontSize="small"  />
            </>
        )
    }

    if(type === 3){
        return(
            <>
                <AnnouncementOutlinedIcon style={{marginTop:'-5px'}} fontSize="small" />
            </>
        )
    }
}